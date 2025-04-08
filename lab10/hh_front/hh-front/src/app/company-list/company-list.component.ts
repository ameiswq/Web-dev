// src/app/company-list/company-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company.model';
import { CommonModule } from '@angular/common';
import { VacancyListComponent } from '../vacancy-list/vacancy-list.component'; 




@Component({
  selector: 'app-company-list',  // Это должен быть правильный селектор
  templateUrl: './company-list.component.html',
  imports: [VacancyListComponent, CommonModule, HttpClientModule],
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  onCompanyClick(companyId: number): void {
    this.selectedCompanyId = companyId;
  }
}
