import { Component, Inject, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Globals } from '../models/globals';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  globals: Globals;

  constructor(private loginService:LoginService, private userService:UserService, globals: Globals) { 
    this.globals = globals;
  }

  
  
  ngOnInit(): void {
    
  }
  logout(){
    this.loginService.logout();
  }

}
