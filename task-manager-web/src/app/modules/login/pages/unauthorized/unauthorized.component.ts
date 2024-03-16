import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from 'src/app/shared/enums/routes';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent {
  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate([Routes.LOGIN]);
  }
}
