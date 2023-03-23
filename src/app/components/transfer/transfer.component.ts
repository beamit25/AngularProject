import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/models/wallet';
import { WalletservicesService } from 'src/app/service/walletservices.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  constructor(private walletService:WalletservicesService,private router:Router){}
  refer:Wallet = new Wallet();
  wallet :Wallet = new Wallet();
  amount?:number;
  msg: string = "";
  errorMsg: string = "";
  id?:string;

  idtoid?:string;
  onSubmit(id?:string,idtoid?:string,amount?:number){
    this.walletService.getWalletById(id!).subscribe(
      {
        next: (data)=>{
          this.refer = data;
          
            this.walletService.transferFunds(Number(id),Number(idtoid),amount).subscribe(
              {
                next: (data)=>{
                  console.log(data)
                  this.msg= "Transfer is done successfully";
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
