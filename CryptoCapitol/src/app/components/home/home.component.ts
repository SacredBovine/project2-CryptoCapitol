import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { AssetBackEnd } from 'src/app/models/asset-back-end';
import { TickerService } from 'src/app/services/ticker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  assets:Asset[] = [];
  pastAssets:AssetBackEnd[] = [] ;

  constructor(private tickerService:TickerService) { }

  ngOnInit(): void {
    this.getAssets();
 
  }

  buyAsset(assetBackEnd:AssetBackEnd) {
    this.tickerService.addAsset(assetBackEnd).subscribe(
      (response: AssetBackEnd[]) => {
        this.pastAssets=response;
      }
    )
  }

  getAssets() {
    this.tickerService.getAllAssets().subscribe(
      (response: Asset[]) => {
        response.forEach( obj => this.renameKey( obj, '1d', 'd1' ) );
        response.forEach( obj => this.renameKey( obj, '7d', 'd7' ) );
        this.assets = response;
        console.log(this.assets[0].rank, this.assets[0].symbol, this.assets[0].name, this.assets[0].price);
        this.buyAsset(new AssetBackEnd(this.assets[0].name, this.assets[0].price,this.assets[0].rank, this.assets[0].symbol));
        this.buyAsset(new AssetBackEnd(this.assets[1].name, this.assets[1].price,this.assets[1].rank, this.assets[1].symbol));
      }
    )
  }

  renameKey ( obj:any, oldKey:string, newKey:string ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

}
