import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, filter } from 'rxjs';
import { User, UserLogin } from '../../interfaces/user.interface';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NewUserStoreService {
  private FormListenerSubject!: BehaviorSubject<User>;
  private FormLoginListenerSubject!: BehaviorSubject<UserLogin>;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.FormListenerSubject = new BehaviorSubject<User>({} as User);
    this.FormLoginListenerSubject = new BehaviorSubject<UserLogin>(
      {} as UserLogin
    );

    this.initFormListener();
    this.loginListener();
  }

  setFormValue(formValue: User): void {
    this.FormListenerSubject.next(formValue);
  }

  setFormLoginValue(formValue: UserLogin): void {
    this.FormLoginListenerSubject.next(formValue);
  }

  private initFormListener(): void {
    this.FormListenerSubject.pipe(
      debounceTime(500),
      filter((user) => !!user.email)
    ).subscribe((userValue) => {
      this.userService.postNewUser(userValue).subscribe({
        next: () => {
          this.router.navigate(['/registration-confirm']);
        },
        error: () => alert('Usuario não cadastrado')
      });
    });
  }

  private loginListener(): void {
    this.FormLoginListenerSubject.pipe(
      debounceTime(500),
      filter((user) => !!user.email)
    ).subscribe((userValue) => {
      this.authenticationService.login(userValue).subscribe({
        next: (request) => {
          localStorage.setItem('token', request.token);
          localStorage.setItem('id', JSON.stringify(request.user.id));
          this.router.navigate(['/dashboard']);
        },
        error: () => alert('Usuario não cadastrado')
      });
    });
  }
}
