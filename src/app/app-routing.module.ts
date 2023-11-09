import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/cart/cart.component';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';

const routes: Routes = [
  { path:"products" , component:AllProductsComponent },
  { path:"details/:id", component: ProductsDetailsComponent },
  { path:"cart" , component:CartComponent },
  { path:"**" , redirectTo:"products" , pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
