import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ItemProductComponent } from './item-product/item-product.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'product-page/:name',component:ProductPageComponent},
    {path:'item-product/:name/:id', component:ItemProductComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }