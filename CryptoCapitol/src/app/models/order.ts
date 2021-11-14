import { AssetBackEnd } from "./asset-back-end";

export class Order {

    public orderType:number;
	public name:string;
	public symbol:string;
	public rank:number;
	public userId:number;
	public quantity:number;
	public price:number;	

    constructor(orderType:number, name:string, symbol:string, rank:number, userId:number, quantity:number, price:number){
        this.orderType = orderType;
        this.name = name;
        this.symbol = symbol;
        this.rank = rank;
        this.userId = userId;
        this.quantity = quantity;
        this.price = price;
    }


}
