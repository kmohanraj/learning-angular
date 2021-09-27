import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { BookComponent } from './components/book/book.component';

const appRoutes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project_details', component: ProjectDetailsComponent },
  { path: 'book', component: BookComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
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
