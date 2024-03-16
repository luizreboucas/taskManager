import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from 'src/app/shared/enums/routes';
import { AuthenticationService } from 'src/app/shared/services/authentication/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  isAuthenticated = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    //TESTAR NECESSIDADE DO ONCHANGES
    this.isAuthenticated = this.authenticationService.authenticated();
  }

  navigateToRegistration(): void {
    this.router.navigate([Routes.REGISTRATION]);
  }
}
