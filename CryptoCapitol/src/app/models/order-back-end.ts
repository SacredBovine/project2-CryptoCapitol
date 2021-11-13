import { AssetBackEnd } from "./asset-back-end";

export class OrderBackEnd {

    public id:number;
    public asset:AssetBackEnd;
    public quantity:number;

    constructor( id:number, asset:AssetBackEnd,  quantity:number){
        this.id = id;
        this.asset = asset;
        this.quantity = quantity;
    }

}
