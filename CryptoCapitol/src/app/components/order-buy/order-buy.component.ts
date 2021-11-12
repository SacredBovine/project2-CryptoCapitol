import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { AssetBackEnd } from 'src/app/models/asset-back-end';
import { Order } from 'src/app/models/order';
import { OrderBackEnd } from 'src/app/models/order-back-end';
import { UserBackend } from 'src/app/models/user-backend';
import { TickerService } from 'src/app/services/ticker.service';

@Component({
  selector: 'app-order-buy',
  templateUrl: './order-buy.component.html',
  styleUrls: ['./order-buy.component.css']
})
export class OrderBuyComponent implements OnInit {


  symbol:string = 'BTC'
  userid:number = 1;
  quantity:number =0;
  asset!:Asset ;
  assetB!:AssetBackEnd ;
  order!:Order;
  ordersBackEnd: OrderBackEnd[] = [];

  constructor(private tickerService:TickerService) { }

  ngOnInit(): void {
    this.getInfoAsset(this.symbol);

  }

  getInfoAsset(symbol: string) {
    this.tickerService.getOneAsset(symbol).subscribe(
      (response:Asset)=>{
        this.renameKey(response,'1d', 'd1' ) ;
        this.renameKey(response,'7d', 'd7' ) ;
        this.asset = response;
      }
    )
  }
  renameKey ( obj:any, oldKey:string, newKey:string ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

  buyAsset(){
    this.assetB = new AssetBackEnd(this.asset.name, this.asset.price,this.asset.rank, this.asset.symbol);
    this.order = new Order(this.assetB,this.userid,this.quantity);
    this.tickerService.addOrder(this.order).subscribe(
      (response:UserBackend)=>{
        this.ordersBackEnd = response.orders;
      }
    )


  }

  /*
  step 1: get info about the asset from API - > name, current price
  https://api.nomics.com/v1/currencies/ticker?key=c91fb751e989c4ed8ac2bc37efee319f5c1a366f&ids=BTC&interval=1d,7d&convert=USD&per-page=10&page=1
  step 2: show info of asset in the component

  step 3: ask user how much he wants to buy. -> Numeric textbox -> this will be the quantity

  step 4: create the orders table
  step 5: create class order

  
  
  */ 


}
