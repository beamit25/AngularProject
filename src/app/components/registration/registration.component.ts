import { Component } from '@angular/core';
import { Wallet} from 'src/app/models/wallet';
import { WalletservicesService} from 'src/app/service/walletservices.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  msg: string = "";
  errorMsg: string = "";
  wallet: Wallet=new Wallet();
  constructor(private walletservice:WalletservicesService){}
  onSubmit(){
    let walletpost:Observable <any>=this.walletservice.add(this.wallet);
    walletpost.subscribe(
      {
        next:(data: any)=>{
        
          this.msg= "Registration is done successfully";
          console.log(data);
        },
        error:(error)=>{
          console.log(error);
          
        },
        complete:()=>{
          console.log("logsuccess")

        }
        
        
      }
    )
  }
  

}