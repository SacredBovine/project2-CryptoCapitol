import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  public user:User|null;
  public loggedInStatus:boolean = false;
  
  constructor(private http:HttpClient){
         this.user = null;
         this.loggedInStatus = false
   }

  login(userNameIn:string, passwordIn:string):Observable<User> {
    let loginDto = {
        userName: userNameIn,
        password: passwordIn
    }   
    let user = this.http.post<any>('http://localhost:8082/crypto/user/login/',loginDto);
    return user;
  }
  logout(){
    if(this.http.get<any>('http://localhost:8082/crypto/user/login/'))
    {
      this.user=null;
      this.loggedInStatus=false;
    }
    else{
      console.log("can't logout");
    }
  }
}
