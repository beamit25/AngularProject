import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WalletservicesService} from './service/walletservices.service';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { AllwalletsComponent } from './components/allwallets/allwallets.component';
import { UpdateComponent } from './components/update/update.component';
import { AddfundsComponent } from './components/addfunds/addfunds.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    AllwalletsComponent,
    UpdateComponent,
    AddfundsComponent,
    WithdrawComponent,
    TransferComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    WalletservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
