import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ServiceService } from '../service.service';
declare const FB: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    token: any;
    loged: boolean = false;
    user = { name: 'Hello' };
    constructor(public service: ServiceService, private router: Router) { }
    statusChangeCallback(response: any) {
        if (response.status === 'connected') {
            console.log('connected');
            this.me();
            this.router.navigate(['/dashboard']);
        } else {
            this.login();
        }
    }

    login() {
        FB.login(function (result) {
            this.loged = true;
            this.token = result;
        }, { scope: 'user_friends' });
        
    } 

    me() {
        var me = this;
        FB.api('/me?fields=id,name,first_name',
            function (result) {
                if (result && !result.error) {
                    this.user = result;
                    me.service.setFacebookUserData(this.user);
                } else {
                    console.log(result.error);
                }
            });
    }
    status() {
        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
        //this.me();
        
    }


    ngOnInit() {
        FB.init({
            appId: '107209453283156',
            cookie: false,
            xfbml: true,  // parse social plugins on this page
            version: 'v2.5' // use graph api version 2.5
        });
    }

}
