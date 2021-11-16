import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { Portfolio } from 'src/app/models/portfolio';
import { PorfolioService } from 'src/app/services/porfolio.service';
import { TickerService } from 'src/app/services/ticker.service';


@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {

  portfolio:Portfolio[] = [];
  assets:Asset[] = [];
  total:number = 0;
  visibility:boolean[] = [];

  constructor(private portfolioService:PorfolioService, private tickerService:TickerService) { }

  ngOnInit(): void {
    this.getPortfolio();
    this.fillVisibility();
  }
  
  fillVisibility(){
    for(let i:number = 0; i < 10; i++){
      this.visibility[i]=true;
    }
  }

  getPortfolio(){
    this.portfolioService.getPorfolio().subscribe(
      (response:Portfolio[])=>{
        this.portfolio = response;

        if(this.portfolio.length > 0){
          this.getAssets();
        }
      }
    )
  }

  getAssets() {
    this.tickerService.getAllAssets().subscribe(
      (response: Asset[]) => {
        response.forEach( obj => this.renameKey( obj, '1d', 'd1' ) );
        response.forEach( obj => this.renameKey( obj, '7d', 'd7' ) );
        this.assets = response;
        this.bindPrice();
      }
    )
  }

  renameKey ( obj:any, oldKey:string, newKey:string ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }
  bindPrice(){
    for (let item of this.portfolio){
      for(let coin of this.assets){
        if(item.asset.symbol == coin.symbol){
          item.currentPrice = coin.price;

          this.total += ((coin.price * item.quantity) - item.investment)

        }
      }
    }
  }

}
