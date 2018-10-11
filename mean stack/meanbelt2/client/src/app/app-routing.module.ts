import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductNewComponent } from "./product/product-new/product-new.component";
import { ProductEditComponent } from "./product/product-edit/product-edit.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductShowComponent } from "./product/product-show/product-show.component";

const routes: Routes = [
	{path:"", redirectTo:"products", pathMatch:"full"},
	{path:"products", component: ProductListComponent},
	{path:"new", redirectTo:"products/new", pathMatch:"full"},
	{path:"products/new", component: ProductNewComponent},
	{path:"edit/:id", redirectTo:"products/edit/:id", pathMatch:"full"},
	{path:"products/edit/:id", component: ProductEditComponent},
	{path:"products/details/:id", redirectTo:"products/:id", pathMatch:"full"},
	{path:"products/:id", component: ProductShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }