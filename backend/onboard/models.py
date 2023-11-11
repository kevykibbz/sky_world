from django.db import models
from django.core.exceptions import ValidationError
from django.utils.timezone import now


# Custom validator for supported file formats
def validate_file_format(value):
    supported_formats = ['.pdf']  
    if not value.endswith(tuple(supported_formats)):
        raise ValidationError('Only PDF files are supported.')


# Custom validator for file size unit
def validate_file_size_unit(unit):
    supported_units = ['kb', 'mb'] 
    if unit.lower() not in supported_units:
        raise ValidationError('Unsupported file size unit.')
    


    
    
class Question(models.Model):
    text = models.TextField(null=False, blank=False)
    name = models.CharField(max_length=255,null=False,blank=False)
    type = models.CharField(max_length=20,null=False,blank=False)
    required = models.BooleanField(default=True)
    description = models.TextField(blank=True, null=True)
    
    class Meta:
        db_table='question'
        verbose_name_plural='questions'
        ordering = ['id']

        
    
  
class Option(models.Model):
    question = models.ForeignKey(Question, related_name='options', on_delete=models.CASCADE)
    category = models.CharField(max_length=20,null=False,blank=False)
    value = models.CharField(max_length=20,null=False,blank=False)
    text = models.CharField(max_length=255,null=False,blank=False)
    multiple = models.BooleanField(default=False)
    
    class Meta:
        db_table='option'
        verbose_name_plural='options'
        
    def __str__(self):
        return self.value
    
    

class FileProperty(models.Model):
    question = models.ForeignKey(Question, related_name='file_properties', on_delete=models.CASCADE)
    format = models.CharField(max_length=10,null=False,blank=False,validators=[validate_file_format])
    max_file_size = models.CharField(max_length=10,null=False,blank=False)
    max_file_size_unit = models.CharField(max_length=2,null=False,blank=False,validators=[validate_file_size_unit])
    multiple = models.BooleanField(default=False)
    
    class Meta:
        db_table='file_property'
        verbose_name_plural='file_properties'
        


    def __str__(self):
        return self.format

from django.db import models

class QuestionResponse(models.Model):
    full_name = models.CharField(max_length=255)
    email_address = models.EmailField()
    description = models.TextField()
    gender = models.CharField(max_length=20,choices=[],blank=True)
    programming_stack = models.CharField(max_length=255)
    date_responded = models.DateTimeField(default=now, editable=False)
    
    class Meta:
        db_table='question_response'
        verbose_name_plural='question_responses'
        
    def __str__(self):
        return self.full_name
    
    @property
    def gender_choices(self):
        # Retrieve gender options from the Option model where category is 'gender'
        return Option.objects.filter(category='gender').values_list('value', flat=True)
    
    def get_gender_display(self):
        if self.gender:
            return dict(self.GENDER_CHOICES).get(self.gender)
        return None

class Certificate(models.Model):
    user = models.ForeignKey(QuestionResponse, on_delete=models.CASCADE ,related_name='certificates',blank=False)
    name = models.CharField(max_length=255,blank=False,null=False)
    certificate = models.FileField(upload_to='certificates/',blank=False, null=False)


    class Meta:
        db_table='certificates'
        verbose_name_plural='certificates'
        
    def __str__(self):
        return self.name


