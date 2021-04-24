import { environment } from './../../../environments/environment';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: any;

  constructor(private http: HttpClient) {}

  //Get all user array
  getAll() {
    return this.http.get<any>(`${environment.apiUrl}/users`);
  }

  //Get user by user id
  getById(id: string) {
    return this.http.get<any>(`${environment.apiUrl}/users/${id}`);
  }

  //Retrieve current user information
  getCurrent() {
    return this.http.get<any>(`${environment.apiUrl}/me`);
  }
}
