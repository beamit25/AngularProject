import { Component, OnInit } from '@angular/core';
import { Wallet} from 'src/app/models/wallet';
import { WalletservicesService} from 'src/app/service/walletservices.service';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allwallets',
  templateUrl: './allwallets.component.html',
  styleUrls: ['./allwallets.component.css']
})
export class AllwalletsComponent implements OnInit{
 allwallets: Wallet[]=[];
 msg: string = "";
  errorMsg: string = "";
 constructor(private router: Router,private walletservice:WalletservicesService){}
 
 ngOnInit(): void {
  this.walletservice.getwallets().subscribe(
    {
      next:(data: Wallet[]) => {
        console.log(data);
        this.allwallets = data;
      },
      error: (err: any) => {
        console.log(err);

      },
      complete: () => { }
    }
  )

}
deleteWallet(id?: number): void {
  console.log("Delete wallet id:" + id);
  if (window.confirm("Do you want to delete wallet >?"))
    this.walletservice.deleteWalletsById(id).subscribe(
      {
        next: (data: any) => { // success
          this.msg = "Wallet Deleted Successfully . Id:" + id;
          this.errorMsg = "";
          // to filter the wallet having delted id

          this.allwallets = this.allwallets.filter((all) => {
            console.log("all.id:" + all.id);
            console.log("id:" + id);

            if (all.id != id) {
              console.log("true :" + all.id);
              return true;
            }

            else {
              console.log("false :" + all.id);
              return false;

            }

          }
          );
          console.log(this.allwallets);
          // reload all employees
        },
        error: () => {
          this.errorMsg = "Wallet Could not be deletd.";
          this.msg = "";
        },
        complete: () => { }
      }
    )

}
updateWallet(all: Wallet) {
  console.log("Update Wallet");
  console.log(all);
  //this.router.navigate(['details',this.name]);
  this.router.navigate(['update', all.id]);
}
}
