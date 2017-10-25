import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceService {
  name: string;
  obj: any;
  constructor(public httpService: Http) { }
  private getJson = './assets/userInfo.json';
  private getProduct = 'http://localhost:4202/getProductList';
  private postSignedUpUser = 'http://localhost:4202/signup';
  public data;
  private facebookUserData;
  private cartList;
  login(): Observable<any> {
    return this.httpService.get(this.getJson).map(
      (res: Response) => res.json());
  }
  getProductList(): Observable<any> {
    return this.httpService.get(this.getProduct).map(
      (res: Response) => res.json());
  }
  postUser(Data): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.post(this.postSignedUpUser, Data, options).map(
      data => data.json());
    // (res: Response) => res.json( ));
  }


  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setObj(obj) {
    this.obj = obj;
  }
  getObj() {
    return this.obj;
  }

  setFacebookUserData(data) {
    this.facebookUserData=data;
    console.log(data);
  }
  getFacebookUserData(){
    return this.facebookUserData;
  }
  setCartList(cartProducts){
    this.cartList=cartProducts;

  }
  getCartList(){
    return this.cartList;
  }
  total;
  setBillTotal(total){
this.total=total
  }
  getBillTotal(){
    return this.total;
  }
}