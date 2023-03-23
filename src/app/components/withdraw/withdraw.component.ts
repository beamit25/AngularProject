import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/models/wallet';
import { WalletservicesService } from 'src/app/service/walletservices.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  constructor(private walletService:WalletservicesService,private router:Router){}
  refer:Wallet = new Wallet();
  wallet :Wallet = new Wallet();
  amount?:number;
  id?:string;
  onSubmit(id?:string,amount?:number){
    this.walletService.getWalletById(id!).subscribe(
      {
        next: (data)=>{
          this.refer = data;
          
            this.walletService.withdrawFunds(Number(id),amount).subscribe(
              {
                next: (data)=>{
                  console.log(data)
                  this.router.navigateByUrl('/allwallets');
                },
                error: (error)=>{
                  console.log(error)
                }
              }
            )
          
        }
      }
    )
    }
}

