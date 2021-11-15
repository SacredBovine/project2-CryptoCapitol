import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserDTO } from '../models/user-dto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8082/crypto/user',
  }),
  withCredentials:true
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

  addUser(userDto: UserDTO): Observable<any> {
    return this.http.post<UserDTO>(this.backendUrl, userDto);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<User>(this.backendUrl, user, httpOptions);
  }

  updateUserState(user: User) {
    this.user = user;
  }

  login(userNameIn:string, passwordIn:string):Observable<User> {
    let loginDto = {
        userName: userNameIn,
        password: passwordIn
    }
    return this.http.post<any>(this.backendUrl+'/login/',loginDto/*, httpOptions*/ ) as Observable<User>;
  }

  logout(): Observable<any> {
    this.user=null;
    return this.http.get(this.backendUrl+'/logout',httpOptions) as Observable<any>;

  }

  sendLogout(){
    this.http.get(this.backendUrl+'/login/',httpOptions);
  }
}
