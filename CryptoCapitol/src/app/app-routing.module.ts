import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderBuyComponent } from './components/order-buy/order-buy.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PastRatesComponent } from './components/past-rates/past-rates.component';
import { NavAuthService } from './services/nav-auth.service';


const routes: Routes = [
// {
//   path: '',
//   component: HomeComponent
// },
  {
    path: 'order',
    canActivate: [NavAuthService],
    component: OrderBuyComponent
  },
  {
    path: 'home',
    canActivate: [NavAuthService],
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'history',
    canActivate: [NavAuthService],
    component: PastRatesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
