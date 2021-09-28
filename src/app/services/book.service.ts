import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Book } from "../models/book.model";


@Injectable({
    providedIn: 'root'
})

export class BookService {
  private baseUrl = "http://localhost:8080/api/v1/books";
  private baseUrl2 = "http://localhost:8080/api/v1/book";

  private endPoint: string;
  constructor(private http: HttpClient) {}

  getAll(): Observable<any>{
    this.endPoint = this.baseUrl
    return this.http.get(this.endPoint);
  }

  createBook(book: Object): Observable<Object> {
    this.endPoint = this.baseUrl
    return this.http.post(this.endPoint, book);
  }

  deleteBook(id) {
    this.endPoint = this.baseUrl2
    return this.http.delete(this.endPoint + "/" + id);
  }

  getBookById(id) {
    this.endPoint = this.baseUrl2
    return this.http.get(this.endPoint + "/" + id)
  }

  updateBook(id, data) {
    this.endPoint = this.baseUrl2
    return this.http.put(this.endPoint+ "/"+ id, data)
  }
}
