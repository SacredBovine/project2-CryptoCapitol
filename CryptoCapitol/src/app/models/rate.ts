export class Rate {
    
    public time_period_start:string;
    public rate_close:number;
    
    constructor(time_period_start:string, rate_close:number){
        this.time_period_start = time_period_start;
        this.rate_close = rate_close;
    }
}
