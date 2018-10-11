import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: any;
  error: String;

  constructor(
    private _productservice: ProductService,
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
  editProduct(event){
    event.preventDefault();
    console.log(this.product);
    let observable = this._productservice.updateProduct(this.product);
    observable.subscribe(
      (res)=>{
        this.product = {};
        this._router.navigate(['']);
      },
      (err)=>{
        this.error = err.json().err;
      })
  }
}
