import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { TickerService } from 'src/app/services/ticker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  assets:Asset[] = [];
  constructor(private tickerService:TickerService) { }

  ngOnInit(): void {
    this.getAssets();
  }

  getAssets() {
    this.tickerService.getAllAssets().subscribe(
      (response: Asset[]) => {
        response.forEach( obj => this.renameKey( obj, '1d', 'd1' ) );
        response.forEach( obj => this.renameKey( obj, '7d', 'd7' ) );
        this.assets = response;
      }
    )
  }

  renameKey ( obj:any, oldKey:string, newKey:string ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

}
