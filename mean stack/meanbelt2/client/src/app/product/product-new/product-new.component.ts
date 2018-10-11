import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";


@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
	new_product: {};
	error:String;

  constructor(
    private _productservice: ProductService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
  this.new_product= {};

  this.error="";
  }

  addProduct(){
    event.preventDefault();
    console.log(this.new_product);
    let obseravble = this._productservice.newProduct(this.new_product);
    obseravble.subscribe(
      (res)=>{
        console.log(res.json());
        this.new_product = {};
        this._router.navigate(['']);
      },
      (err) =>{
        this.error=err.json().err;
      }
    );
  }

}
