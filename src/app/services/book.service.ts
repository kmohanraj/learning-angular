import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class BookService {
  private baseUrl = "http://localhost:8080/api/v1/books";
  // private endPoint: string;
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    console.log("-----1-1-")
    return this.http.get(`${this.baseUrl}`);
  }
}
