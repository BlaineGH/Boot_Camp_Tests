import { Component, OnInit } from '@angular/core';
import { AuthorService } from "../author.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  thisauthor: any;
  error: String;

  constructor(
    private _authorservice: AuthorService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.getAuthor();
    this.error="";
    this.thisauthor = {
      id:"",
      name:"",
    };
  }
  getAuthor(){
    this._route.params.subscribe((params)=>{
      let observable = this._authorservice.getAuthor(params.id);
      observable.subscribe(
        (data)=>{
          console.log(data.json());
          this.thisauthor.name = data.json().name;
          this.thisauthor.id = data.json()._id;
        },
        (err) =>{
          this.error = err.json().err;
        }
      );
    });
  }
  editAuthor(event){
    event.preventDefault();
    console.log(this.thisauthor);
    let observable = this._authorservice.UpdateAuthor(this.thisauthor.id, this.thisauthor);
    observable.subscribe(
      (res)=>{
        this._router.navigate(['']);
      },
      (err)=>{
        this.error = err.json().err;
      })
  }
}
