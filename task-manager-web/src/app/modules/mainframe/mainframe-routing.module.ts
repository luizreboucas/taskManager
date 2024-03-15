import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainframePageComponent } from './pages/mainframe-page/mainframe-page.component';
import { HomePageComponent } from '../home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainframePageComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainframeRoutingModule { }
