import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.css']
})
export class SingnupComponent implements OnInit {

  constructor(public service: ServiceService,private router:Router) { }

  ngOnInit() {
  }
  userInput = {
    name: "",
    password: "",
    email: "",
    mobile: "",
  };
  user: any = [];
  validation=false;
 
  signup() {

    this.user.push({ 'name': this.userInput.name, 'password': this.userInput.password, 'email': this.userInput.email, 'mobile': this.userInput.mobile });
    localStorage.setItem('userData', this.user);
    this.service.postUser(this.userInput).subscribe(res=>{
      console.log(res);

     
    });
    this.router.navigate(['/success']);

    
  }

}
