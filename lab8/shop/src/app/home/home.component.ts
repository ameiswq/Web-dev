import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GetDataService } from '../service/get-data.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [NavbarComponent, ReactiveFormsModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerImgs = [
    {
      id: 1,
      img: '/images/banner/ef637eb93bf1a887.webp',
    },
    {
      id: 2,
      img: '/images/banner/9021283f0be266c1.webp',
    },
    {
      id: 3,
      img: '/images/banner/7dcc28ed89760319.webp',
    },
  ];


  getCategoriesData:any;
  getApplianceProductData:any=[];

  constructor(
    private getData:GetDataService
  ){}
  ngOnInit(): void {
      this.getCategoriesData = this.getData.categoriesData;
      this.getData.productData.filter((ele:any)=>{
          if(ele.pdCategory == 'appliances')
          {
            this.getApplianceProductData.push(ele);
          }
      });
  }
}
