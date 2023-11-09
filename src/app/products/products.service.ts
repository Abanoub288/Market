import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getProduct():Observable<any> {
    return this._HttpClient.get('https://fakestoreapi.com/products')
  }
  getCategories():Observable<any> {
    return this._HttpClient.get('https://fakestoreapi.com/products/categories')
  }
  getProductsCategories(keyword:string):Observable<any> {
    return this._HttpClient.get('https://fakestoreapi.com/products/category/'+keyword)
  }
  getProductById(id:any) {
    return this._HttpClient.get('https://fakestoreapi.com/products/' + id )
  }
}
