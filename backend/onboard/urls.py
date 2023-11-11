from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='dashboard'),
    path('questions', views.QuestionList.as_view(), name='question-list'),
    path('add/questions', views.QuestionCreate.as_view(), name='question-create'),
    path('questions/responses', views.QuestionResponseView.as_view(), name='question-response'),
    path('questions/responses/certificates/<int:certificate_id>', views.download_certificate, name='download_certificate'),
    path('options', views.OptionsView.as_view(), name='options-list'),

]
