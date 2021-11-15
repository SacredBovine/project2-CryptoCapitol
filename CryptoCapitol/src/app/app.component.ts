import { Component, Inject } from '@angular/core';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CryptoCapitol';
  public userService: UserService;
  constructor (userService: UserService){
    this.userService = userService;
  };
}

