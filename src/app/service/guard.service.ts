import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private router:Router) { }
  canActivate(): boolean  {
    
    if(sessionStorage.getItem("jwt") != null){

      return   true;
    }
    else
    {
      alert("Please Login, you are not authorised!")
      this.router.navigateByUrl("login");
      return   false;
    }
     
  }
}
