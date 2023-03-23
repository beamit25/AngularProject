import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sampleangular';
  role:string | null ="user" ;

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("Role check!");
    
    this.role =sessionStorage.getItem("role");
  }

  userLogout() {
    console.log("User Logout!");
    sessionStorage.clear();    
    this.role =sessionStorage.getItem("role");
  }

  checkRole():string{
    let role =sessionStorage.getItem("role");

    switch(role){
      case "user":return "user"
      
      case "admin":return "admin"
      default:return "public"
    }
  }
}
