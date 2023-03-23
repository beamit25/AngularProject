import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wallet } from 'src/app/models/wallet';
import { WalletservicesService } from 'src/app/service/walletservices.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  msg: string = "";
  errorMsg: string = "";

  id: string | null = "";
  wallet: Wallet = new Wallet();

  constructor(private router:Router,private activatedRoute: ActivatedRoute,private walletservice:WalletservicesService ) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("update id:" + this.id);
    this.walletservice.getWalletById(this.id).subscribe(

      {
        next: (data) => {
          this.wallet = data;
          console.log(data);

        },
        error: (error) => {
          console.log(Error);

        }
      }

    )

  }

  updateWallet(){
    console.log("Update wallet:");
    console.log(this.updateWallet);
    this.walletservice.updateWallet(this.wallet).subscribe(
      {
        next:(data: any)=>{
          this.msg= "Wallet updated successfully";
          this.errorMsg= "";
          this.router.navigateByUrl("updateWallet");
        },
        error:(err: { error: any; })=>{
          console.log(err.error);
          this.msg= "";
          this.errorMsg= JSON.stringify(err.error);//"Wallet could not be updated successfully";

        }
      }
    )
  }

}

