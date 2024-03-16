import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from 'src/app/shared/enums/routes';
import { AuthenticationService } from 'src/app/shared/services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationGuard {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (!this.authenticationService.authenticated()) {
      return true;
    } else {
      this.router.navigate([Routes.UNAUTHORIZED]);
      return false;
    }
  }
}
