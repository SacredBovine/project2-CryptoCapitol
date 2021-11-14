import { Component, ElementRef, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { AssetBackEnd } from 'src/app/models/asset-back-end';
import { Order } from 'src/app/models/order';
import { OrderBackEnd } from 'src/app/models/order-back-end';
import { UserBackEnd } from 'src/app/models/user-back-end';
import { TickerService } from 'src/app/services/ticker.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order-buy',
  templateUrl: './order-buy.component.html',
  styleUrls: ['./order-buy.component.css']
})
export class OrderBuyComponent implements OnInit {

  symbol:string = 'BTC';
  userid:number = 1;
  quantity : number =0;
  assets:Asset[]=[];
  asset!:Asset;
  assetB:AssetBackEnd|null=null  ;
  order:Order|null=null ;
  ordersBackEnd: OrderBackEnd[] = [];

  constructor(private tickerService:TickerService,
    private host: ElementRef<HTMLElement>,
    private userService: UserService) { }

  ngOnInit(): void {
    if (this.userService.loggedInStatus ==false){
      this.closeOnNoSession();
    }
    this.getInfoAsset();
  }

  getInfoAsset() {
    this.tickerService.getOneAsset().subscribe(
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
    this.assetB = new AssetBackEnd(this.asset.name, this.asset.price,this.asset.rank, this.asset.symbol);
    this.order = new Order(this.assetB,this.userid,this.quantity);
    this.tickerService.addOrder(this.order).subscribe(
      (response:UserBackEnd)=>{
        this.ordersBackEnd = response.orders;
        console.log(this.ordersBackEnd[0].id);
      }
    )
  }

  closeOnNoSession(){
    this.host.nativeElement.remove();
  }

}
