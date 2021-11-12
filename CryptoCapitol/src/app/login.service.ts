import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  public user:User|null = null;
  
  constructor(private http:HttpClient){ }

  login(emailIn:string, passwordIn:string):Observable<User> {
    let loginDto = {
        email: emailIn,
        password: passwordIn
    }
    
    return this.http.post<any>('http://localhost:8082/crypto/user/login/',loginDto)
  }
}
