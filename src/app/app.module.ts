import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminModule } from './components/admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    ProjectDetailsComponent,
    BookListComponent,
    AddBookComponent,
    BookDetailsComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
