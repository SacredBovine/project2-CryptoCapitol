
import { Component, OnInit, Inject, Renderer2  } from '@angular/core';
import { Asset } from 'src/app/models/asset';
import { TickerService } from 'src/app/services/ticker.service';
import { DOCUMENT } from '@angular/common';
import { Globals } from 'src/app/models/globals';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  assets:Asset[] = [];
  visibility:boolean[] = [];
  globals: Globals;
  constructor(private tickerService:TickerService, @Inject(DOCUMENT) private _document:Document, private _renderer2: Renderer2, globals: Globals) { 
    this.globals = globals;
  }


  ngOnInit(): void {
    this.getAssets();
    this.fillVisibility();
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
    `;

    this._renderer2.appendChild(this._document.body, script);
  }

  fillVisibility(){
    for(let i:number = 0; i < 10; i++){
      this.visibility[i]=true;
    }
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

  toggleMouseOver(rowIndex:number){
    if(this.globals.loggedIn){
      this.visibility[rowIndex]=false;
    }
    
  }
  toggleMouseOut(rowIndex:number){
    if(this.globals.loggedIn){
      this.visibility[rowIndex]=true;
    }
  }

}
