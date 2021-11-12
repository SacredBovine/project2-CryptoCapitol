import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string ="";
  public password:string="";
  public fail:boolean=true;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.email, this.password).subscribe(
      (data:User)=>{
        data = new User(data.userId, data.firstName, data.lastName, data.email);
        this.loginService.user=data;
      },
      (error)=>{
        this.loginService.user=null;

      }
    )
  }
}
