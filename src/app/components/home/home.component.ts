import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = "";
  constructor(private router: Router) { }
  displayDetails() {
    console.log("details clicked:" + this.name);
    this.router.navigate(['details',this.name]);
  }
}
