import { Component, OnInit } from '@angular/core';
import { AuthorService } from "../author.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
	new_author: {};
	error:String;

  constructor(
  	private _authorservice: AuthorService,
  	private _route: ActivatedRoute,
  	private _router: Router,
  	) { }

  ngOnInit() {
  	this.new_author = {
  		name:""
  	};

  	this.error="";
  }

  addAuthor(event){
    event.preventDefault();
  	let obseravble = this._authorservice.NewAuthor(this.new_author);
  	obseravble.subscribe(
  		(res)=>{
        this.new_author = { name:""};
  		  this._router.navigate(['']);
	  	},
	  	(err) =>{
	  		this.error=err.json().err;
	  	}
  	);
  }

}
