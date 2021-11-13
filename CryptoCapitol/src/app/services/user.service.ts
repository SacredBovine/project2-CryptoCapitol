import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private http: HttpClient) {}

  addUser(user: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(this.backendUrl, user, httpOptions)
  }
}
