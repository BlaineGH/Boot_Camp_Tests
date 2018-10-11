import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorNewComponent } from "./author/author-new/author-new.component";
import { AuthorEditComponent } from "./author/author-edit/author-edit.component";
import { AuthorListComponent } from "./author/author-list/author-list.component";

const routes: Routes = [
	{path:"", component: AuthorListComponent},
	{path:"new", component: AuthorNewComponent},
	{path:"edit/:id", component: AuthorEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
