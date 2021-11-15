import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderBuyComponent } from './components/order-buy/order-buy.component';
import { PastRatesComponent } from './components/past-rates/past-rates.component';
import { ChartsModule } from 'ng2-charts';
import { NewsComponent } from './components/news/news.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { Globals } from './models/globals';
<<<<<<< HEAD
import { ProfileComponent } from './components/profile/profile.component';
=======
import { NavbarComponent } from './components/navbar/navbar.component';
>>>>>>> master



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    OrderBuyComponent,
    PastRatesComponent,
    NewsComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ChartsModule,
    FormsModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
