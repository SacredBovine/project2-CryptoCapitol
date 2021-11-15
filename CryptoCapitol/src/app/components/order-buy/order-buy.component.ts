import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset } from 'src/app/models/asset';
import { AssetBackEnd } from 'src/app/models/asset-back-end';
import { Order } from 'src/app/models/order';
import { OrderBackEnd } from 'src/app/models/order-back-end';
import { UserBackEnd } from 'src/app/models/user-back-end';
import { TickerService } from 'src/app/services/ticker.service';

@Component({
  selector: 'app-order-buy',
  templateUrl: './order-buy.component.html',
  styleUrls: ['./order-buy.component.css']
})
export class OrderBuyComponent implements OnInit {

  symbol:string = '';
  userid:number = 1;
  quantity : number=0;
  investment : number =0;
  assets:Asset[]=[];
  asset!:Asset;
  assetB:AssetBackEnd|null=null  ;
  order:Order|null=null ;
  ordersBackEnd: OrderBackEnd[] = [];
  resultClass:string = "hidden";
  isdisable:boolean = false;
  constructor(private tickerService:TickerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.symbol = params.symbol;
    }
  );
    this.getInfoAsset();

  }

  updateQuantity(){
    let value = this.investment / this.asset.price;
    this.quantity = value.toFixed(9) as any;
  }


  getInfoAsset() {
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
  renameKey ( obj:any, oldKey:string, newKey:string ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

  buyAsset(){
 
    this.order = new Order(1, this.asset.name, this.asset.symbol, this.asset.rank, this.userid, this.quantity, this.asset.price);
    this.tickerService.addOrder(this.order).subscribe(
      (response:UserBackEnd)=>{
        this.ordersBackEnd = response.orders;
        console.log(this.ordersBackEnd[0].id);
        this.resultClass = "puff-in-center";
        this.isdisable = true;
      }
    )

  }

}
