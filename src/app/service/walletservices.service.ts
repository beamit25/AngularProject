import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ Wallet} from '../models/wallet';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WalletservicesService {

  constructor( private httpclient:HttpClient ) { }
  
  getWalletById(id:string|null):Observable<any>{
    return this.httpclient.get("http://localhost:8090/getwallet/"+id);
  }
  updateWallet(wallet:Wallet):Observable<any>{
    return this.httpclient.put("http://localhost:8090/updatewallet",wallet);
  }
  deleteWalletsById(id?:number):Observable<any>{
    return this.httpclient.delete("http://localhost:8090/wallet/"+id);
  }
  add(newWallet:Wallet):Observable <any>{
    return this.httpclient.post("http://localhost:8090/wallet",newWallet);
  }
  getwallets():Observable<any>{
    return this.httpclient.get("http://localhost:8090/wallets");
  }
  addFunds(id?:number,amount?:number):Observable<any>{
    let body = {'id':id,'amount':amount};
    return this.httpclient.patch("http://localhost:8090/wallet/"+encodeURIComponent(String(id))+"/"+encodeURIComponent(String(amount)),body);
  }
  withdrawFunds(id?:number,amount?:number):Observable<any>{
    let body = {'id':id,'amount':amount};
    return this.httpclient.patch("http://localhost:8090/wallet/"+encodeURIComponent(String(id))+"/fund/"+encodeURIComponent(String(amount)),body);
  }
  transferFunds(id?:number,idtoid?:number,amount?:number):Observable<any>{
    let body = {'id':id,'idtoid':idtoid,'amount':amount};
    return this.httpclient.patch("http://localhost:8090/transfer/"+encodeURIComponent(String(id))+"/"+encodeURIComponent(String(idtoid))+"/"+encodeURIComponent(String(amount)),body);
  }
}
