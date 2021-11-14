import { AssetBackEnd } from "./asset-back-end";

export class OrderBackEnd {

    public id:number;
    public asset:AssetBackEnd;
    public typeOrder:number;
    public quantity:number;
    public price:number;

    constructor( id:number, asset:AssetBackEnd,  typeOrder:number, quantity:number,  price:number){
        this.id = id;
        this.asset = asset;
        this.quantity = quantity;
        this.typeOrder = typeOrder;
        this.price = price;
    }

}
