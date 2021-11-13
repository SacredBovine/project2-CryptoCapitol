import { Component, Injectable, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:string ="";
  public password:string="";
  public fail:boolean=false;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.username, this.password).subscribe(
      (data:User)=>{
        this.fail=false;
        data = new User(data.userId, data.userName, data.firstName, data.lastName, data.email);
        this.loginService.user=data;
        console.log(this.loginService.user);
        this.loginService.loggedInStatus = true;

      },
      (error)=>{
        this.loginService.user=null;
        this.fail = true;
      }
    )
  }
}
