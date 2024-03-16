import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, filter } from 'rxjs';
import {
  User,
  UserLogin,
  UserResponseToken
} from '../../interfaces/user.interface';
import { AuthenticationService } from '../authentication/authentication.service';
import { Routes } from '../../enums/routes';

@Injectable({
  providedIn: 'root'
})
export class NewUserStoreService {
  private formListenerSubject!: BehaviorSubject<User>;
  private formLoginListenerSubject!: BehaviorSubject<UserLogin>;
  private userSubject!: BehaviorSubject<User>;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.formListenerSubject = new BehaviorSubject<User>({} as User);
    this.formLoginListenerSubject = new BehaviorSubject<UserLogin>(
      {} as UserLogin
    );
    this.userSubject = new BehaviorSubject<User>({} as User);

    this.initFormListener();
    this.loginListener();
  }

  get userSubject$() {
    return this.userSubject.asObservable();
  }

  setFormValue(formValue: User): void {
    this.formListenerSubject.next(formValue);
  }

  setFormLoginValue(formValue: UserLogin): void {
    this.formLoginListenerSubject.next(formValue);
  }

  private initFormListener(): void {
    this.formListenerSubject
      .pipe(
        debounceTime(500),
        filter((user: User) => !!user.email)
      )
      .subscribe((userValue: User) => {
        this.userService.postNewUser(userValue).subscribe({
          next: () => {
            this.router.navigate([Routes.REGISTRATION_CONFIRM]);
          },
          error: () => alert('Usuario não cadastrado')
        });
      });
  }

  private loginListener(): void {
    this.formLoginListenerSubject
      .pipe(
        debounceTime(500),
        filter((user: UserLogin) => !!user.email)
      )
      .subscribe((userValue) => {
        this.authenticationService.login(userValue).subscribe({
          next: (request: UserResponseToken) => {
            localStorage.setItem('token', request.result.token);
            localStorage.setItem('id', JSON.stringify(request.result.user._id));
            this.userSubject.next(request.result.user);
            this.router.navigate([Routes.DASHBOARD]);
          },
          error: () => alert('Usuario não cadastrado')
        });
      });
  }
}
