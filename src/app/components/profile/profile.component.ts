import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';
import { AuthService } from 'src/app/service/auth.service';
import { Router} from '@angular/router'
import { WalletservicesService} from 'src/app/service/walletservices.service';

import { UpdateComponent } from 'src/app/components/update/update.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit{
  
  msg: string = "";
  errorMsg: string = "";
  wallet:Wallet= new Wallet();


  constructor(private authService:AuthService, private router: Router,private walletservice:WalletservicesService){}

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe(
      {
        next:(data)=>{
          console.log(data);  
          this.wallet= data;

        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }
  updateWallet( wallet: Wallet) {
    console.log("Update Wallet");
    //this.router.navigate(['details',this.name]);
    this.router.navigate(['update', wallet.id]);
  }
  deleteWallet(id?: number): void {
    console.log("Delete wallet id:" + id);
    if (window.confirm("Do you want to delete wallet >?"))
      this.walletservice.deleteWalletsById(id).subscribe(
        {
          next: (data: any) => { // success
            this.msg = "Wallet Deleted Successfully . Id:" + id;
            this.errorMsg = "";
          
          },
          error: () => {
            this.errorMsg = "Wallet Could not be deletd.";
            this.msg = "";
          },
          complete: () => { }
        }
      )
  
  }
  
}
