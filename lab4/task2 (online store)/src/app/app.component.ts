import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ProductsComponent } from './products/products.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsComponent, RouterLink],
  template: `
    <main>
     <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/kaspi.png" alt="logo" aria-hidden="true" />
      </header>
      </a>
      <section class="content">
        <app-products></app-products>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products-app';
}
