import { Component, OnInit } from '@angular/core';
import { OrderBackEnd } from 'src/app/models/order-back-end';
import { User } from 'src/app/models/user';
import { UserBackEnd } from 'src/app/models/user-back-end';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  user:User|null = null
  orders: OrderBackEnd[] = [];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.getOrders();
  }

  getOrders(){
    if(!this.userService.user){
      return;
    }
    this.userService.getUser().subscribe(
      (response:UserBackEnd)=>{
        this.orders = response.orders;
      }
    )
  }

}
