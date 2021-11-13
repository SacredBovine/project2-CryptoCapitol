import { Component, Inject } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CryptoCapitol';
  public loginService:LoginService;
  constructor (@Inject(LoginService) loginService:LoginService){
    this.loginService = loginService;
  };
}

