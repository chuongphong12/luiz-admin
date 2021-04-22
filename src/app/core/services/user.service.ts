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

  getAll() {
    return this.http.get<any>(`${environment.apiUrl}/users`);
  }

  getById(id: string) {
    return this.http.get<any>(`${environment.apiUrl}/users/${id}`);
  }

  getCurrent() {
    return this.http.get<any>(`${environment.apiUrl}/me`);
  }
}
