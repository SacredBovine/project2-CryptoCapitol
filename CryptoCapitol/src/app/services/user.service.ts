import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserDTO } from '../models/user-dto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private backendUrl = 'http://localhost:8082/crypto/user'
  public user:User|null;
  public loggedInStatus:boolean = false;

  constructor(private http: HttpClient) {
    this.user = null;
    this.loggedInStatus = false
  }

  addUser(userDto: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(this.backendUrl, userDto, httpOptions)
  }

  login(userNameIn:string, passwordIn:string):Observable<User> {
    let loginDto = {
        userName: userNameIn,
        password: passwordIn
    }   
    let user = this.http.post<any>(this.backendUrl+'/login/',loginDto);
    return user;
  }
  
  logout(){
    if(this.http.get<any>(this.backendUrl+'/login/'))
    {
      this.user=null;
      this.loggedInStatus=false;
    }
    else{
      console.log("can't logout");
    }
  }
}
