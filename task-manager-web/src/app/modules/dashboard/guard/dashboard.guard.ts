import { Router } from '@angular/router';
import { AuthenticationService } from './../../../shared/services/authentication/authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Routes } from 'src/app/shared/enums/routes';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authenticationService.authenticated()) {
      this.router.navigate([Routes.DASHBOARD]);
      return true;
    } else {
      this.router.navigate([Routes.UNAUTHORIZED]);
      return false;
    }
  }
}
