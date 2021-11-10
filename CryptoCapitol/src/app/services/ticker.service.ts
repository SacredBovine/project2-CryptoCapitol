import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Asset } from '../models/asset';
import { Observable } from 'rxjs';
import { AssetBackEnd } from '../models/asset-back-end';


@Injectable({
  providedIn: 'root'
})
export class TickerService {

  constructor(private http:  HttpClient) { }

  url:string = 'https://api.nomics.com/v1/currencies/ticker?key=c91fb751e989c4ed8ac2bc37efee319f5c1a366f';

  getAllAssets(){
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('ids', 'BTC,ETH,XRP,SOL,ADA,DOGE,SHIB,BNB,USDT,DOT');
    params = params.append('interval', '1d,7d');
    params = params.append('convert', 'USD');
    params = params.append('per-page', '10');
    params = params.append('page', '1');

    return this.http.get<Asset[]>(this.url, { params: params })
  }

  addAsset(assetB: AssetBackEnd): Observable<AssetBackEnd[]> {
    console.log(assetB.price);
    return this.http.post<AssetBackEnd[]>("http://localhost:8082/crypto/asset",assetB) as Observable<AssetBackEnd[]>;
  }


}
