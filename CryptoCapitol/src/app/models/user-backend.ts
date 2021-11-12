import { OrderBackEnd } from "./order-back-end";

export class UserBackend {

    public userId: number;
    public userName: string;
    public password : string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public orders: OrderBackEnd[];

    constructor(userId: number,userName: string,password : string,firstName: string,
        lastName: string,email: string,orders: OrderBackEnd[] ){
            this.userId = userId;
            this.userName =userName;
            this.password = password;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.orders = orders;

        }

}
