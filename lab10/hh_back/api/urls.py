from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import company_detail, company_list, company_vacancies, VacancyListAPIView, VacancyDetailAPIView, VacancyTopTenAPIView



urlpatterns = [
    path('api/vacancies/', VacancyListAPIView.as_view()),
    path('api/vacancies/<int:Vacancy_id>/', VacancyDetailAPIView.as_view()),
    path('api/vacancies/top_ten/', VacancyTopTenAPIView.as_view()),
    path('api/companies/', company_list),
    path('api/companies/<int:pk>/', company_detail),
    path('api/companies/<int:pk>/vacancies/', company_vacancies),
]
