import { Component} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../service/get-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-page',
  imports: [NavbarComponent, ReactiveFormsModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{


  getParamValue:any;
  getProductData:any=[];
  filterProductData:any=[];
  constructor(private route:ActivatedRoute, private getData:GetDataService){

  }

  ngOnInit(): void {
      this.getParamValue = this.route.snapshot.paramMap.get('name');

      this.getData.productData.filter((ele:any)=>{
        if(ele.pdCategory == this.getParamValue){
          this.getProductData.push(ele);
          this.filterProductData.push(ele);
        }
      });
  }

  addLike(productId: number): void {
    this.getData.addLike(productId);
  }

  removeProduct(productId: number): void {
    this.filterProductData = this.filterProductData.filter((product: any) => product.pdId !== productId);
  }  
}
