import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from 'src/app/shared/enums/routes';
import { AuthenticationService } from 'src/app/shared/services/authentication/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterContentChecked {
  isAuthenticated = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngAfterContentChecked(): void {
    this.isAuthenticated = this.authenticationService.authenticated();
  }

  navigateToRegistration(): void {
    this.router.navigate([Routes.REGISTRATION]);
  }
}
