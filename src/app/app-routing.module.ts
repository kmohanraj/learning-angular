import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { BookListComponent } from './components/book/book-list/book-list.component'; 
import { AddBookComponent } from './components/book/add-book/add-book.component'; 
import { BookDetailsComponent } from './components/book/book-details/book-details.component';

const appRoutes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project_details', component: ProjectDetailsComponent },
  { path: 'books', component: BookListComponent },
  { path: 'add_book', component: AddBookComponent },
  { path: 'book_details/:id', component: BookDetailsComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
