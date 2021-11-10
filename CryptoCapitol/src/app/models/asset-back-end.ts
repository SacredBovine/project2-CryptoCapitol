export class AssetBackEnd {


    public name:string;
    public price:number;
    public rank:number;
    public symbol:string;
  

    constructor(name:string,price:number,rank:number,symbol:string){
        this.name = name;
        this.price= price;
        this.rank = rank;
        this.symbol = symbol;
    }
    
}