from django.contrib import admin
from .models import Company, Vacancy

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'city')  # Отображаемые поля
    search_fields = ('name', 'city')  # Поля для поиска
    list_filter = ('city',)  # Фильтрация

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'salary', 'company')  # Поля для отображения
    search_fields = ('name',)  # Поиск по названию вакансии
    list_filter = ('company', 'salary')  # Фильтрация по компании и зарплате