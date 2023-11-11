from rest_framework import serializers
from .models import *
from rest_framework.renderers import JSONRenderer
from rest_framework.utils.serializer_helpers import ReturnDict

class FilePropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = FileProperty
        fields = '__all__'
   
   
class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = '__all__'
             
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        # Exclude the 'id' field from the representation
        data.pop('id', None)
        data.pop('question', None)  # Remove 'question'
        return data
    
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        exclude = ['id']
    

class CertificateSerializer(serializers.ModelSerializer):
    certificate=serializers.ListField(child=serializers.FileField(allow_empty_file=False,max_length=None), required=True)
    
    class Meta:
        model = Certificate
        exclude = ['name','user']
        
    
    def get_file_size_in_bytes(self, size, unit):
        size=int(size)
        unit = unit.lower()
        if unit == 'kb':
            return int(size * 1024)  # 1 KB = 1024 bytes
        elif unit == 'mb':
            return int(size * 1024 * 1024)  # 1 MB = 1024 KB = 1,048,576 bytes
        return int(size)
    
    def validate_certificate(self, value):
        # Get the max_file_size and max_file_size_unit from FileProperty model
        file_property = FileProperty.objects.first()
        max_file_size = file_property.max_file_size
        max_file_size_unit = file_property.max_file_size_unit

        # Convert max_file_size to bytes based on the unit
        max_file_size_bytes = self.get_file_size_in_bytes(max_file_size, max_file_size_unit)
        
        for file in value:
            # Check file format
            supported_formats = ['.pdf']  # Define the supported file formats
            if not file.name.lower().endswith(tuple(supported_formats)):
                raise serializers.ValidationError("Invalid file format. Only PDF files are allowed.")

            # Check file size
            if file.size > max_file_size_bytes:
                raise serializers.ValidationError(f"File size exceeds the maximum allowed size of {max_file_size} {max_file_size_unit}.")

        return value
        
class QuestionResponseSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField()
    email_address = serializers.EmailField()
    description = serializers.CharField()
    # Use CharField for dynamic choices
    gender = serializers.CharField()
    programming_stack = serializers.CharField()
    
    class Meta:
        model = QuestionResponse
        fields = '__all__'
        extra_kwargs = {
            'full_name': {'required': True},
            'email_address': {'required': True},
            'description': {'required': True},
            'gender': {'required': True},
            'programming_stack': {'required': True},
        }
        
    def get_dynamic_gender_choices(self):
        # Retrieve gender options from the Option model where category is 'gender'
        gender_choices = Option.objects.filter(category='gender').values_list('value', flat=True)
        return [choice.lower() for choice in gender_choices]

    def validate_gender(self, value):
        dynamic_gender_choices = self.get_dynamic_gender_choices()
        if value not in dynamic_gender_choices:
            available_choices = ', '.join(dynamic_gender_choices)
            raise serializers.ValidationError(f"Invalid value for gender. Choose from the available options: {available_choices}")        
        return value

    def validate_programming_stack(self, value):
        dynamic_programming_stack_choices = self.get_dynamic_programming_stack_choices()
        languages = [lang.strip().lower() for lang in value.split(',')]
        invalid_languages = [lang for lang in languages if lang not in dynamic_programming_stack_choices]
        if invalid_languages:
            available_choices = ', '.join(dynamic_programming_stack_choices)
            invalid_choices = ', '.join(invalid_languages)
            raise serializers.ValidationError(f"Invalid programming stack value(s): {invalid_choices}. Choose from the available options: {available_choices}")
        return value
    
    def get_dynamic_programming_stack_choices(self):
        # Retrieve programming stack options from the Option model where category is 'programming_stack'
        programming_stack_choices = Option.objects.filter(category='programming_stack').values_list('value', flat=True)
        return [choice.lower() for choice in programming_stack_choices]


    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        # Modify the 'gender' field to use dynamic choices
        gender_choices = self.get_dynamic_gender_choices()
        data['gender'] = serializers.ChoiceField(choices=gender_choices).to_representation(instance.gender)
        return data

class CustomJSONRenderer(JSONRenderer):
    def render(self, data, accepted_media_type, renderer_context):
        return super().render(data, accepted_media_type, renderer_context)