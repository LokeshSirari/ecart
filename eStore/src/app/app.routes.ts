import { RouterModule, Routes } from '@angular/router';
import { SingnupComponent } from './singnup/singnup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { LoginheaderComponent } from './loginheader/loginheader.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { SignupsuccessfulComponent } from './signupsuccessful/signupsuccessful.component';
import { BillComponent } from './bill/bill.component'

export const route: Routes = [
    { path: '', component: HomeComponent },
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SingnupComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'productdetail/:id', component: ProductdetailComponent},
    {path: 'profile', component:UserdetailComponent},
    {path: 'success',component:SignupsuccessfulComponent},
    {path: 'bill', component:BillComponent}
]

  