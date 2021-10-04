import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { User } from '../models/user.model'


@Injectable({
    providedIn: 'root'
})

export class UserService {
  private baseUrl = "http://localhost:8080/api/v1/user/register";

  private endPoint: string;
  constructor(private http: HttpClient) {}

  registerUser(user: Object): Observable<Object> {
    this.endPoint = this.baseUrl
    return this.http.post(this.endPoint, user);
  }

  
}
