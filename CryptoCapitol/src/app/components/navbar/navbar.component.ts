import { Component, Inject, OnInit } from '@angular/core';
import { Globals } from '../../models/globals';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  globals: Globals;

  constructor(private userService:UserService, globals: Globals) { 
    this.globals = globals;
  }

  
  
  ngOnInit(): void {
    
  }
  logout(){
    this.userService.logout();
  }

}
