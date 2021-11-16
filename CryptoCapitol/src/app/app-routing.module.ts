import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderBuyComponent } from './components/order-buy/order-buy.component';
import { RegisterComponent } from './components/register/register.component';
import { PastRatesComponent } from './components/past-rates/past-rates.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'buy',
    component: OrderBuyComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'history',
    component: PastRatesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
