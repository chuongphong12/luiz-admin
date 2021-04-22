import { AuthService } from './auth.service';
import { environment } from './../../../environments/environment';
import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: any;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: string) {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  getCurrent() {
    const currentUser = this.authService.currentUserValue;
    if (localStorage.getItem('currentUser')) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`,
      });
      return this.http.get<any>(`${environment.apiUrl}/me`, {
        headers,
      });
    }
  }
}
