import { Component, OnInit, Input } from '@angular/core';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from '../models/vacancy.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  imports: [CommonModule], 
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  @Input() companyId: number = 0;
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) {}

  ngOnInit(): void {
    if (this.companyId) {
      this.vacancyService.getVacancies(this.companyId).subscribe((data) => {
        console.log('Vacancies data:', data);
        this.vacancies = data;
      });
    }
  }
}
