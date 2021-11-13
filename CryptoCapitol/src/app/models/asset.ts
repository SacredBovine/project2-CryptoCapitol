import { D1 } from '../models/d1';
import { D7 } from '../models/d7';

export class Asset {
    
    public name:string;
    public symbol:string;
    public rank:number;
    public price:number;
    public market_cap:number;
    public logo_url:String;
    public circulating_supply:number;
    public d1:D1;
    public d7:D7;

    constructor(symbol:string, name:string, rank:number, price:number, market_cap:number, logo_url:string, circulating_supply:number, d1:D1, d7:D7){
        this.symbol = symbol;
        this.name = name;
        this.rank = rank;
        this.price= price;
        this.market_cap = market_cap;
        this.logo_url = logo_url;
        this.circulating_supply = circulating_supply;
        this.d1 = d1;
        this.d7 = d7;
    };

    
    

}
