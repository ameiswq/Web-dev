import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Product } from '../product';

@Component({
  selector: 'app-product-location',
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="products.photo"
        alt="Exterior photo of {{ products.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ products.name }}</h2>
      <p class="listing-location">
      <span class="star-icon"></span> {{ products.rating }}, {{ products.description }}
       </p>
       <a [href]="products.link" target="_blank">Buy</a>
       <br>
       <a 
        [href]="'https://wa.me/?text=' + encodeLink(products.link)" 
        target="_blank" 
        class="share-button whatsapp">
        Share on WhatsApp
      </a>
      <br>
      <a 
        [href]="'https://t.me/share/url?url=' + encodeLink(products.link)" 
        target="_blank" 
        class="share-button telegram">
        Share on Telegram
      </a>
    </section>
  
  `,
  styleUrl: './product-location.component.css'
})
export class ProductLocationComponent {
  @Input() products!: Product;

  encodeLink(link: string): string {
    return encodeURIComponent(link);
  }
}
