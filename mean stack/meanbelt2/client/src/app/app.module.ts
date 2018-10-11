import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { ProductService } from "./product/product.service";

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductShowComponent } from './product/product-show/product-show.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ProductNewComponent,
    ProductEditComponent,
    ProductShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
