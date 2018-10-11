import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from "../product.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productlist= [];

  constructor(private _productservice: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    console.log(this);
    let observable = this._productservice.getAllProducts();
    observable.subscribe((data)=>{
      console.log(data.json());
      this.productlist = data.json();
    });
  }

}
