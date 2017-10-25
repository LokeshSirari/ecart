import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public service: ServiceService) { }
  productList: any;
  ngOnInit() {
    this.service.getProductList().subscribe(res => {
      this.productList = res;
      for (let i = 0; i < this.productList.length; i += 1) {
        this.productList[i].quantity = 0;
        this.productList[i].total = 0;
      }
    }
    )

  }
  total;

  completeTotal() {
    this.total = 0;
    for (let products of this.productList) {
      this.total = this.total + products.total;
    }

  }
  cart(products) {

    products.total = products.quantity * products.price;
    this.completeTotal();
    this.service.setCartList(this.productList)
    this.service.setBillTotal(this.total);
  }
  decrease(products) {
    if (products.quantity == 0) {
      //do nothing
    }
    else {
      products.quantity--;
    }
  }
  increase(products) {
    products.quantity++;
  }
}
