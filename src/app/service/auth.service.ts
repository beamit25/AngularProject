import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Wallet} from '../models/wallet'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  userLogin(wallet:Wallet):Observable<any>{
    return this.httpClient.post("http://localhost:8090/auth/login",wallet,{responseType:'json'});
  }
  userLogout(){

  }
  getUserInfo():Observable<any>{

    let jwt = sessionStorage.getItem("jwt");

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
   });
   return this.httpClient.get("http://localhost:8090/auth/userinfo", { headers: reqHeader })

  }
}