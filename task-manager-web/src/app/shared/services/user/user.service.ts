import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  postNewUser(body: User): Observable<User> {
    return this.http.post<User>(`${environment.LOCAL}/user`, body);
  }
}
