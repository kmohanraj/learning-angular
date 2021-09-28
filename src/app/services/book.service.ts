import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Book } from "../components/book.model";


@Injectable({
    providedIn: 'root'
})

export class BookService {
  private baseUrl = "http://localhost:8080/api/v1/books";
  private baseUrl1 = "http://localhost:8080/api/v1/book";

  private endPoint: string;
  constructor(private http: HttpClient) {}

  getAll(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  createBook(book: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, book);
  }

  deleteBook(id) {
    this.endPoint = "http://localhost:8080/api/v1/book"
    return this.http.delete(this.endPoint + "/" + id);
  }

  getBookById(id) {
    this.endPoint = "http://localhost:8080/api/v1/book"
    return this.http.get(this.endPoint + "/" + id)
  }
}
