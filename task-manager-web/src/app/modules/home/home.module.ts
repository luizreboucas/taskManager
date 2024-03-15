import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, MatDividerModule]
})
export class HomeModule {}
