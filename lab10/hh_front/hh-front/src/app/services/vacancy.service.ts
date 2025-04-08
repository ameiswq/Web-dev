// src/app/services/vacancy.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy.model';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private apiUrl = 'http://localhost:8000/api/companies';  // URL вашего бэкенда

  constructor(private http: HttpClient) { }

  getVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}/${companyId}/vacancies/`);
  }
}
