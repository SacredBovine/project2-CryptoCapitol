import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    console.log(this.userService.user);
  }
  logout(){
    this.userService.logout().subscribe(
        (data:any)=>{
          this.userService.user = null;
          this.userService.loggedInStatus = false;
        },
        (error)=>{
          console.log('there was an error logging out');
        }
      )
  }
}
