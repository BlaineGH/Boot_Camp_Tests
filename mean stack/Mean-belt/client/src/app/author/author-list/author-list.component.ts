import { Component, OnInit } from '@angular/core';
import { AuthorService } from "../author.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
	authorlist=[];
	thisauthor = {};

  constructor(private _authorservice: AuthorService) { }

  ngOnInit() {
  	this.getAllAuthors();

  	this.thisauthor = {
  		_id: "",
  	};
  }

  getAllAuthors(){
    console.log(this);
  	let observable = this._authorservice.getAllAuthors();
  	observable.subscribe((data)=>{
      console.log(data.json());
  		this.authorlist = data.json();
  	});
  }
  onDelete(id){
  	let observable = this._authorservice.DeleteAuthor(id);
  	observable.subscribe((res)=>{
      console.log(res);
  		this.getAllAuthors();
  	});
  }
}
// getQuotes() {
//     this._route.params.subscribe( (params) => {
//       this.author_id = params['id'];
//       let observable = this._authorService.getQuotes(this.author_id);
//       observable.subscribe( (res) => {
//         this.quotes = res.json().data.quotes;
//         this.author_name = res.json().data.name;
//       })
//     })
//   }

//   voteUpQuote(id) {
//     let observable = this._authorService.voteUpQuote(id);
//     observable.subscribe( (res) => {
//       this.getQuotes();
//     })
//   }

//   voteDownQuote(id) {
//     let observable = this._authorService.voteDownQuote(id);
//     observable.subscribe( (res) => {
//       this.getQuotes();
//     })
//   }