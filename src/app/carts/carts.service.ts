import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private _HttpClient: HttpClient) { }

  cartNewCart(model:any): Observable<any> {
    return this._HttpClient.post('https://fakestoreapi.com/carts' , model)
  }
}
