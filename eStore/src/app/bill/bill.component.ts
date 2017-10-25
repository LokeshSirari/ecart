import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(public service: ServiceService) { }
bill;
facebookUser
name
id
cartProduct;
total;
  ngOnInit() {
  }
  showBill(){
    this.facebookUser=this.service.getFacebookUserData();
    this.name=this.facebookUser.name;
    this.id=this.facebookUser.id;
    this.cartProduct=this.service.getCartList();
    this.total=this.service.getBillTotal();
  }

}
