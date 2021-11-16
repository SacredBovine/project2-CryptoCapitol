import { Asset } from "./asset";

export class Portfolio {

    public asset:Asset;
    public quantity:number = 0;
    public investment:number = 0;
    public id:number = 0;
    public currentPrice:number = 0;

    constructor(id:number, asset:Asset, quantity:number, investment:number, currentPrice:number){
        this.asset = asset;
        this.quantity= quantity;
        this.id = id;
        this.asset = asset;
        this.currentPrice = this.currentPrice;
    }
}
