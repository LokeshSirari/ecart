import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupsuccessful',
  templateUrl: './signupsuccessful.component.html',
  styleUrls: ['./signupsuccessful.component.css']
})
export class SignupsuccessfulComponent implements OnInit {
data:any;
  constructor() { }

  ngOnInit() {
this.data = localStorage.getItem('userData');
  }

}
