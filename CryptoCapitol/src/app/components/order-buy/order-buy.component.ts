import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-buy',
  templateUrl: './order-buy.component.html',
  styleUrls: ['./order-buy.component.css']
})
export class OrderBuyComponent implements OnInit {


  symbol:string = 'BTC'
  userid:number = 1;

  constructor() { }

  ngOnInit(): void {

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
