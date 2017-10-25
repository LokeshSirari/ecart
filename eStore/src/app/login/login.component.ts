import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: ServiceService, public router: Router) { }

  ngOnInit() {
  }
  userInput = {
    email: "",
    password: ""
  };
  login() {
    let flag=0;
    this.service.login().subscribe(res => {

      for (let obj of res) {
        if (obj.email == this.userInput.email && obj.password == this.userInput.password) {
          this.service.setName(obj.name);
          this.router.navigate(['/dashboard']);
          flag=1;
          this.service.setObj(obj);
        }
      }
      if(!flag){
        let user = JSON.parse(localStorage.getItem('userData'));
        console.log(user)
        for (let obj of user) {
          console.log(obj)
          if (obj.email == this.userInput.email && obj.password == this.userInput.password) {
            this.service.setName(obj.name);
            this.router.navigate(['/dashboard']);
            flag=1;
            this.service.setObj(obj);
          }
        }
      
      }
      
      if(!flag){
        alert("Wrong Emai/Passowrd")
      }
    })


  }

}
