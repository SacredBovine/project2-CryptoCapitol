import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../models/story';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }


  getStories(){

    let url:string = "https://newsapi.org/v2/everything?q=bitcoin AND dogecoin AND etherum&apiKey=ae8eba155c964bbab58ba67e29e668f0&pageSize=10"

    return this.http.get<any>(url) as Observable<any>

  }


}
