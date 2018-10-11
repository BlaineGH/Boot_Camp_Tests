import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthorService } from "./author/author.service";
import { AuthorComponent } from './author/author.component';
import { AuthorNewComponent } from './author/author-new/author-new.component';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { AuthorListComponent } from './author/author-list/author-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorNewComponent,
    AuthorEditComponent,
    AuthorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
