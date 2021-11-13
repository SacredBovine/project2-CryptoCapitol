import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PastRatesComponent } from './components/past-rates/past-rates.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'history',
    component: PastRatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
