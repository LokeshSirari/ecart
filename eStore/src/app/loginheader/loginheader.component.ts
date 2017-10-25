import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import{ Router} from '@angular/router'
@Component({
  selector: 'app-loginheader',
  templateUrl: './loginheader.component.html',
  styleUrls: ['./loginheader.component.css']
})
export class LoginheaderComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {
  }
  name=this.service.getName();
}
