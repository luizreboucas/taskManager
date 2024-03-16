import { Injectable } from '@angular/core';
import { UserLogin, UserResponse } from '../../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Routes } from '../../enums/routes';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  login(body: UserLogin): Observable<UserResponse> {
    return this.http.post<UserResponse>('http://localhost:3000/Login', body);
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate([Routes.DEFAULT]);
  }

  authenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
