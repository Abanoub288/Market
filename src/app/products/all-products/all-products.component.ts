import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {

  products:any[] = [];
  categories:any[] = [];
  loading:boolean = false;
  cartProducts:any[] = [];
  constructor (private _productsService:ProductsService) {
    this.loading = true;
    this._productsService.getProduct().subscribe({
      next: (data) => this.products = data,
      error:(err)=> alert(err.message),
      complete:()=> console.log('Complete')
    })
    this.loading = true;
    this._productsService.getCategories().subscribe({
      next: (res) => this.categories = res,
      error:(err)=> alert(err.message),
      complete:()=> console.log('Complete')
    })
    this.loading = false;
  }

  filterCategory(event: any) {
    let value = event.target.value;
    this.loading = true;
    if(value == "all") {
      this._productsService.getProduct().subscribe((res) => {
        this.products = res;
      })
      this.loading = false;
    } else {
      this._productsService.getProductsCategories(value).subscribe((res: any) => {
        this.loading = false;
        this.products = res;
      })
    }
  }

  addToCart(event:any) {
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if(exist) {
        alert("Product is already in your cart")
      } else {
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }


}
