import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
	product: any;
	error: String;

  constructor(
    private _productservice: ProductService
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.getProduct();
    this.error="";
    this.product = {};
  }
  getProduct(){
    this._route.params.subscribe((params)=>{
      let observable = this._productservice.getProduct(params.id);
      observable.subscribe(
        (data)=>{
          console.log(data.json());
          this.product = data.json();
        },
        (err) =>{
          this.error = err.json().err;
        }
      );
    });
  }
  onDelete(event){
  event.preventDefault();
    let observable = this._productservice.deleteProduct(this.product);
    observable.subscribe((res)=>{
      this.getProduct();
      this.product = {};
    this._router.navigate(['']);
    });
  }
}
