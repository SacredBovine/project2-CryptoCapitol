import { AssetBackEnd } from "./asset-back-end";

export class Order {

    public asset:AssetBackEnd;
    public userId:number;
    public quantity:number;

    constructor(asset:AssetBackEnd, userId:number, quantity:number){
        this.asset = asset;
        this.userId = userId;
        this.quantity = quantity;
    }


}
