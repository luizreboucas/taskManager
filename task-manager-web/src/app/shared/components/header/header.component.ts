import { AfterContentChecked, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterContentChecked {
  isAuthenticated = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngAfterContentChecked(): void {
    this.isAuthenticated = this.authenticationService.authenticated();
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }

  logout(): void {
    this.authenticationService.logOut();
  }
}
