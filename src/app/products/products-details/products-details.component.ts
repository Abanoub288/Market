import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {
  id:any;
  data:any = {};
  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsService:ProductsService ) {
    this.id = this._ActivatedRoute.snapshot.paramMap.get("id")

    this._ProductsService.getProductById(this.id).subscribe({
      next: (res) => this.data = res,
      error: (err) => alert(err.message),
      complete: () => console.log('Complete')
    })
  }
}
