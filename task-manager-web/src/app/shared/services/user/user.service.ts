import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserLogin, UserResponse } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  postNewUser(body: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', body);
  }
}
