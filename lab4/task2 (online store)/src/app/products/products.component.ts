import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Product } from '../product';
import {ProductionService} from '../production.service'
import {ProductLocationComponent} from '../product-location/product-location.component'

@Component({
  selector: 'app-products',
  imports: [ProductLocationComponent, CommonModule],
  template:`
    <section class="results">
      <app-product-location 
      *ngFor="let products of productList"
      [products]="products"></app-product-location>
    </section>
  `,
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productList: Product[] = [];
  productService: ProductionService = inject(ProductionService);
  constructor() {
    this.productList = this.productService.getAllProducts();
  }
}
