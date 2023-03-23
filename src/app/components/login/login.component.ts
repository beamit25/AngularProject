import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/models/wallet';
import {AuthService } from 'src/app/service/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  msg: string = "";
  errorMsg: string = "";
  wallet: Wallet = { email: "", password: "" };

  constructor(private router: Router,  private authService: AuthService) { }

  displayUserForm() {
    console.log("displayUserForm()");
    console.log(this.wallet);
  }

  submitLoginForm() {
    console.log("submitLoginForm()");

    // if user is authorised navigate to home/dashboard page
    //if(this.employee.name=="ford" && this.employee.password=="ford1234")

    console.log(this.wallet);

    this.authService.userLogin(this.wallet).subscribe(
      {
        next:(data: { jwt: string; role: string; })=>{
          
          console.log(data);
          sessionStorage.setItem("user",JSON.stringify(data));
          console.log(data.jwt);
          sessionStorage.setItem("jwt",data.jwt);
          sessionStorage.setItem("role",data.role);
          
          //localStorage
          this.router.navigateByUrl("home");
        },
        error:(err: any)=>{
          console.log(err.error);
          
        }
      }
    );
    

  }
}
