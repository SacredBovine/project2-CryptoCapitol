import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset } from 'src/app/models/asset';
import { Order } from 'src/app/models/order';
import { Portfolio } from 'src/app/models/portfolio';
import { PorfolioService } from 'src/app/services/porfolio.service';
import { TickerService } from 'src/app/services/ticker.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order-sell',
  templateUrl: './order-sell.component.html',
  styleUrls: ['./order-sell.component.css']
})
export class OrderSellComponent implements OnInit {

  constructor(private tickerService:TickerService, private route: ActivatedRoute, public userService: UserService, private portfolioService:PorfolioService) { 
    if(userService.user != null){
      this.userid = userService.user.userId
    }
  }

  symbol:string = '';
  userid:number = 1;
  assets:Asset[]=[];
  portfolio:Portfolio[] = [];
  asset!:Asset;
  returnUSD:number=0;
  quantity:number=0;
  isdisable:boolean = false;
  availability:number = 0;
  resultClass:string = "hidden";
  order:Order|null=null;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.symbol = params.symbol;
      }
    );
    this.getInfoAsset();
    this.getPortfolio();
  }
  getInfoAsset() {
    if(!this.symbol){
      return;
    }
    this.tickerService.getOneAsset(this.symbol).subscribe(
      (response:Asset[])=>{
        
        this.renameKey(response[0],'1d', 'd1' ) ;
        this.renameKey(response[0],'7d', 'd7' ) ;
        this.assets = response;
        console.log(this.assets[0].name);
        console.log(this.assets[0].logo_url);
        this.asset=this.assets[0];
      }
    )
  }
  getPortfolio(){
    this.portfolioService.getPorfolio().subscribe(
      (response:Portfolio[])=>{
        this.portfolio = response;

        if(this.portfolio.length > 0){
          this.getAssetAvailability();
        }
      }
    )
  }
  sellAsset(){
    this.order = new Order(2, this.asset.name, this.asset.symbol, this.asset.rank, this.userid, this.quantity * (-1), this.asset.price);
    this.tickerService.addOrder(this.order).subscribe(
      (response)=>{
        console.log(response);
        this.resultClass = "puff-in-center";
        this.isdisable = true;
      }
    )
  }
  getAssetAvailability(){
    for(let item of this.portfolio){
      if(item.asset.symbol = this.symbol){
        this.availability = item.quantity;
      }
    }
  }

  updateReturn(){
    if(this.quantity > this.availability){
      this.quantity = this.availability;
    }
    let value = this.quantity * this.asset.price;
    this.returnUSD = value.toFixed(9) as any; 
  }

  renameKey ( obj:any, oldKey:string, newKey:string ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

}
