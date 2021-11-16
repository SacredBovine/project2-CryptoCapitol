import { Component, OnInit } from '@angular/core';
import {  ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Rate } from 'src/app/models/rate';
import { PastRatesService } from 'src/app/services/past-rates.service';
import { Color, Label } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';
import { Asset } from 'src/app/models/asset';
import { TickerService } from 'src/app/services/ticker.service';


@Component({
  selector: 'app-past-rates',
  templateUrl: './past-rates.component.html',
  styleUrls: ['./past-rates.component.css']
})
export class PastRatesComponent implements OnInit {

  rates:Rate[] = []
  data:number[] = []
  min:number = 0;
  max:number = 0;
  assets:Asset[]=[];
  asset!:Asset;
  symbol:string =''
  lineChartData: ChartDataSets[] = [
    { data: this.data, label: 'USD' }
  ];

  lineChartLabels: Label[] = []

   // Set true to show legends
  lineChartLegend = false;
  lineChartType:ChartType = 'line';
  lineChartPlugins = [];
  
  // Define chart options
  lineChartOptions:ChartOptions = {
    responsive: true,
    elements:{
      line:{
        tension:0
      }
    },
    scales:{
      yAxes:[{
        ticks:{
          callback:function(value:number, index, values) {
            if(value >= 1000){
              return '$' + value.toLocaleString();
            } else {
              return '$' + value;
            }
          }
        }
      }]
    },
    tooltips: {
      callbacks: {
        label:function(tooltipItem, data) {
          return '$' + tooltipItem.yLabel?.toLocaleString() as string;
        }
      }
    },
    animation:{
      duration:2000,
      easing: 'linear',
      onProgress: function(animation) {
        console.log( animation.currentStep / animation.numSteps);
    }
    }
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(0,82,161,0.2)',
      borderColor: 'rgba(0,37,73,0.5)'
    }
  ];  


  constructor(private pastRates:PastRatesService, private route: ActivatedRoute, private tickerService:TickerService) { }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        this.symbol = params.symbol;
      }
    );
    this.loadPastRates();
    this.getInfoAsset();
  }

  loadPastRates(){

    this.pastRates.getPastRates(this.symbol).subscribe(
      (response: Rate[]) => {
        this.rates = response;
        this.populateData(this.rates);
      }
    )

  }

  populateData(rates:Rate[]){
    this.min =  rates[0].rate_close;
    for(let rate of rates){
      if(rate.rate_close > this.max){
        this.max = rate.rate_close;
      }
      if(rate.rate_close < this.min){
        this.min = rate.rate_close;
      }
      this.data.push(rate.rate_close);
      this.lineChartLabels.push(rate.time_period_start.substr(0,10));
      console.log(rate.time_period_start.substr(0,10));
    }
    
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
  // events
  chartClicked({ event, active }: { event?: MouseEvent|undefined, active?: {}[] |undefined }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event?: MouseEvent|undefined, active?: {}[]|undefined }): void {
    console.log(event, active);
  }

  renameKey ( obj:any, oldKey:string, newKey:string ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

}
