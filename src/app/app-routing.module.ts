import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent} from './components/registration/registration.component';
import{ HomeComponent} from './components/home/home.component';
import{ AllwalletsComponent} from './components/allwallets/allwallets.component';
import { UpdateComponent } from './components/update/update.component';
import { AddfundsComponent } from './components/addfunds/addfunds.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { LoginComponent } from './components/login/login.component';
import { GuardService } from './service/guard.service';
const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  { path: 'update/:id', component: UpdateComponent },
  {path:'allwallets', component:AllwalletsComponent},
  {path: 'addfunds', component: AddfundsComponent},
  {path: 'withdrawfunds', component:WithdrawComponent},
  {path: 'transferfunds', component:TransferComponent},
  {path: 'updatewallet', component:UpdateComponent},
  {path: 'profile', component: ProfileComponent,canActivate:[GuardService] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
