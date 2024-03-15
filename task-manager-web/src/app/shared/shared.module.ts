import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule {}
