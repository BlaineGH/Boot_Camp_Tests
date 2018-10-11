import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  getAllProducts(){
  	return this._http.get("/products");
  }
  getProduct(id){
  	return this._http.get(`/products/${id}`);
  }
  newProduct(newproduct){
  	return this._http.post("/products", newproduct);
  }
  deleteProduct(product){
  	return this._http.delete(`/products/${product._id}`);
  }
  updateProduct(product){
  	return this._http.patch(`/products/${product._id}`, product);
  }
}