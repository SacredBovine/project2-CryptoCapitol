import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NavAuthService } from 'src/app/services/nav-auth.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:string ="";
  public password:string="";
  public fail:boolean=false;

  constructor(private userService:UserService, private navService: NavAuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.username, this.password).subscribe(
      (data:User)=>{
        this.fail=false;
        data = new User(data.userId, data.userName, data.firstName, data.lastName, data.email);
        this.userService.user=data;
        this.userService.loggedInStatus = true;

      },
      (error)=>{
        this.userService.user=null;
        this.fail = true;
      }
    )
  }
}
