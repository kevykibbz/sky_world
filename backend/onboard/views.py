from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from .serializers import OptionSerializer, QuestionSerializer
from rest_framework.permissions import AllowAny
from django.http import HttpResponse
from django.template import loader
from rest_framework.views import APIView
from xml.etree import ElementTree as ET
from rest_framework import pagination
from django.http import FileResponse
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework_xml.renderers import XMLRenderer
from rest_framework.pagination import PageNumberPagination


#render react app template
def index(request):
    return render(request, 'index.html');


class QuestionCreate(generics.CreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            question = serializer.save()
            if  request.data.get('options', []):
                options_data = request.data.get('options', [])
                # Append the 'question' field with its primary key
                for option in options_data:
                    option['question'] = question.id
            
                option_serializer = OptionSerializer(data=options_data, many=True)

                if option_serializer.is_valid():
                    # Save the options to the Option model
                    option_serializer.save()
                    # Check if option_data is empty and create the response accordingly
                    response_data = {
                        "message": "Question and Options added successfully",
                        "question_data": serializer.data,
                        "status": status.HTTP_201_CREATED
                    }

                    if options_data:
                        response_data["option_data"] = option_serializer.data

                    return Response(response_data, status=status.HTTP_201_CREATED)
                else:
                    return Response({
                        "message": "Error in options",
                        "data": option_serializer.errors,
                        "status": status.HTTP_400_BAD_REQUEST
                    }, status=status.HTTP_400_BAD_REQUEST)
                    
            elif request.data.get('file_properties', []):
                options_data = request.data.get('file_properties', [])
                # Append the 'question' field with its primary key
                for option in options_data:
                    option['question'] = question.id
                file_serializer = FilePropertySerializer(data=options_data, many=True)
                
                if file_serializer.is_valid():
                    # Save the file properties to the FileProperties model
                    file_serializer.save()
                    # Check if option_data is empty and create the response accordingly
                    response_data = {
                        "message": "Question and Options added successfully",
                        "question_data": serializer.data,
                        "status": status.HTTP_201_CREATED
                    }

                    if options_data:
                        response_data["file_properties"] = file_serializer.data

                    return Response(response_data, status=status.HTTP_201_CREATED)
                else:
                    return Response({
                        "message": "Error in options",
                        "data": file_serializer.errors,
                        "status": status.HTTP_400_BAD_REQUEST
                    }, status=status.HTTP_400_BAD_REQUEST)
            else:
                my_serializer = self.get_serializer(data=request.data)
                if my_serializer.is_valid():
                    #save to Question model
                    serializer.save()
                    return Response({
                        "message": "Question added successfully",
                        "question_data": my_serializer.data,
                        "status": status.HTTP_201_CREATED
                    }, status=status.HTTP_201_CREATED)
                else:
                    return Response({
                            "message": "Error",
                            "data": serializer.errors,
                            "status": status.HTTP_400_BAD_REQUEST
                        },
                        status=status.HTTP_400_BAD_REQUEST
                    )
           
        else:
            return Response({
                "message": "Error",
                "data": serializer.errors,
                "status": status.HTTP_400_BAD_REQUEST
            }, status=status.HTTP_400_BAD_REQUEST)

    

class QuestionList(generics.ListCreateAPIView):
    queryset = Question.objects.all().distinct().order_by("id")
    serializer_class = QuestionSerializer

    def list(self, request, *args, **kwargs):
        questions = self.get_queryset()
        serialized_questions = []

        for question in questions:
            serialized_question = {
                "text": question.text,
                "description": question.description,
                "type": question.type,
                "name": question.name,
                "required": question.required,
            }

            if question.type == "choice":
                options = Option.objects.filter(question=question)
                serialized_options = {"option": [{"value": option.value, "text": option.text} for option in options]}
               
               # Check if there are multiple choices
                serialized_question["options"] = serialized_options
                if options.exists():
                    serialized_options["multiple"] = options.first().multiple
                else:
                    serialized_options["multiple"] = False
                    
            elif question.type == "file":
                file_properties = FileProperty.objects.filter(question=question)

                # Check if file properties exist
                if file_properties.exists():
                    # Assuming there is only one file property for simplicity
                    first_file_property = file_properties.first()
                    serialized_question["file_properties_format"] = first_file_property.format
                    serialized_question["file_properties_max_file_size"] = first_file_property.max_file_size
                    serialized_question["file_properties_max_file_size_unit"] = first_file_property.max_file_size_unit
                    serialized_question["file_properties_multiple"] = first_file_property.multiple

            serialized_questions.append(serialized_question)

        response_data = {"questions": {"question": serialized_questions}}
        # Use a template to render the XML data
        template = loader.get_template('questions.xml')
        context = {"response_data": response_data}
        rendered_data = template.render(context)

        # Set the response content type to XML
        response = HttpResponse(rendered_data, content_type='application/xml')
        return response




def download_certificate(request, certificate_id):
    certificate = get_object_or_404(Certificate, pk=certificate_id)
    
    # Set the content type of the response to force the file download
    response = FileResponse(certificate.certificate, content_type='application/pdf')
    
    # Set the Content-Disposition header to specify the filename
    response['Content-Disposition'] = f'attachment; filename="{certificate.name}"'
    
    return response




class CustomPageNumberPagination(PageNumberPagination):
    page_size = 10


class QuestionResponseView(generics.ListCreateAPIView):
    serializer_class = QuestionResponseSerializer
    certificate_class = CertificateSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['email_address']
    ordering_fields = '__all__'
    pagination_class = CustomPageNumberPagination

    def get(self, request, *args, **kwargs):
        self.paginator.page_size = 10  # Set the page size

        queryset = self.filter_queryset(self.get_queryset())

        # Use pagination to get the current page
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            xml_data = XMLRenderer().render(serializer.data)

            # Parse the XML data
            root = ET.fromstring(xml_data)

            # Change the root element name
            root.tag = 'question_responses'

            # Add attributes to the root element
            root.set('current_page', str(self.paginator.page.number))
            root.set('last_page', str(self.paginator.page.paginator.num_pages))
            root.set('page_size', str(self.paginator.page_size))
            root.set('total_count', str(self.paginator.page.paginator.count))

            # Change the list item element names
            for list_item in root.findall('.//list-item'):
                list_item.tag = 'question_response'

            # Convert the modified ElementTree object back to XML string
            modified_xml_data = ET.tostring(root, encoding='utf-8').decode('utf-8')

            return HttpResponse(modified_xml_data, content_type='application/xml')

    def get_queryset(self):
        # Get the email_address from the request
        email_address = self.request.query_params.get('email_address', None)

        # Filter queryset based on email_address
        queryset = QuestionResponse.objects.all()
        if email_address:
            queryset = queryset.filter(email_address=email_address)

        return queryset

    def put(self, request, *args, **kwargs):
        email = request.data.get('email_address')
        existing_user = QuestionResponse.objects.filter(email_address=email).first()

        if existing_user:
            return Response(
                {"message": "You have already responded to this survey."},
                status=status.HTTP_400_BAD_REQUEST
            )

        response_serializer = self.get_serializer(data=request.data)
        certificate_serializer = self.certificate_class(data=request.data)

        if response_serializer.is_valid():
            question_response = response_serializer.save()

            if certificate_serializer.is_valid():
                uploaded_files = request.FILES.getlist('certificate')
                certificates_data = []

                for uploaded_file in uploaded_files:
                    certificate = Certificate(user=question_response, certificate=uploaded_file, name=uploaded_file.name)
                    certificate.save()
                    certificates_data.append({'name': certificate.name})

                template = loader.get_template('user_response.xml')
                context = {
                    'full_name': question_response.full_name,
                    'email_address': question_response.email_address,
                    'description': question_response.description,
                    'gender': question_response.gender,
                    'programming_stack': question_response.programming_stack,
                    'certificates': certificates_data,
                    'date_responded': question_response.date_responded,
                }
                rendered_data = template.render(context)

                return HttpResponse(rendered_data, content_type='application/xml')
            else:
                return Response(
                    {"message": "Invalid data.", "errors": certificate_serializer.errors},
                    status=status.HTTP_400_BAD_REQUEST
                )
        else:
            return Response(
                {"message": "Invalid data.", "errors": response_serializer.errors},
                status=status.HTTP_400_BAD_REQUEST
            )





class OptionsView(APIView):
    renderer_classes = [CustomJSONRenderer]
    
    def get(self, request):
        options = Option.objects.all()

        option_data = {}
        for option in options:
            category = option.category
            value = option.value.lower()
            option_id = option.id  # Get the option ID

            if category not in option_data:
                option_data[category] = []

            option_data[category].append({'id': option_id, 'option': value})

        return Response(option_data)





