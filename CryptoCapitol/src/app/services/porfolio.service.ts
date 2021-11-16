import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from '../models/portfolio';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  private backendUrl = 'http://localhost:8082/crypto/portfolio/'

  constructor(private http:HttpClient, private userService:UserService) { }

  getPorfolio():Observable<Portfolio[]>{

    return this.http.get<Portfolio[]>(this.backendUrl + this.userService.user?.userId) as Observable<Portfolio[]>

  }


}
