import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class AuthorService {

  constructor(private _http: Http) { }

  getAllAuthors(){
  	return this._http.get("/authors");
  }
  getAuthor(id){
  	return this._http.get(`/authors/${id}`);
  }
  NewAuthor(newauthor){
  	return this._http.post("/authors", newauthor);
  }
  DeleteAuthor(id){
  	return this._http.delete(`/authors/${id}`);
  }
  UpdateAuthor(id, author){
  	return this._http.patch(`/authors/${id}`, author)
  }
}
