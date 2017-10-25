import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SingnupComponent } from './singnup/singnup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { LoginheaderComponent } from './loginheader/loginheader.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { SignupsuccessfulComponent } from './signupsuccessful/signupsuccessful.component';
import { route } from './app.routes';
import { BillComponent } from './bill/bill.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SingnupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProductdetailComponent,
    LoginheaderComponent,
    UserdetailComponent,
    SignupsuccessfulComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule,
    HttpModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
