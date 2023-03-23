import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/models/wallet';
import { WalletservicesService } from 'src/app/service/walletservices.service';

@Component({
  selector: 'app-addfunds',
  templateUrl: './addfunds.component.html',
  styleUrls: ['./addfunds.component.css']
  
})
export class AddfundsComponent {
  constructor(private walletService:WalletservicesService,private router:Router){}
  refer:Wallet = new Wallet();
  wallet :Wallet = new Wallet();
  amount?:number;
  id?:string;
  onSubmit(id?:string,amount?:number){
    this.walletService.getWalletById(id!).subscribe(
      {
        next: (data: Wallet)=>{
          this.refer = data;
          
            this.walletService.addFunds(Number(id),amount).subscribe(
              {
                next: (data: any)=>{
                  console.log(data)
                  this.router.navigateByUrl('/allwallets');
                },
                error: (error: any)=>{
                  console.log(error)
                }
              }
            )
          
        }
      }
    )
    }
}
