import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Rate } from '../models/rate';

@Injectable({
  providedIn: 'root'
})
export class PastRatesService {

  constructor(private http:  HttpClient) { }

  
  getPastRates(symbol:string){
    let url:string = "https://rest.coinapi.io/v1/exchangerate/" + symbol + "/USD/history";
    // Initialize Params Object
    let params = new HttpParams();

    let currentDate:Date = new Date(Date.now());
    let currentDate2:Date = new Date(Date.now());

    let yesterday = new Date(currentDate.setDate(currentDate.getDate() - 1))
    let oneMonthAgo = new Date(currentDate2.setMonth(currentDate2.getMonth() - 1))

     // Begin assigning parameters
     params = params.append('period_id', '1DAY');
     params = params.append('time_start', oneMonthAgo.toISOString());
     params = params.append('time_end', yesterday.toISOString());
     
     let headers = new HttpHeaders();
     headers = headers.set('X-CoinAPI-Key', 'BCDE656B-53A4-46F7-9FB4-BC795BCE2FDD');

     return this.http.get<Rate[]>(url, { params: params, headers : headers })

  }



}
