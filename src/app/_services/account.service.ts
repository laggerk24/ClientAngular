import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  baseUrl='https://localhost:7181/api/';
  login(model:any){
    return this.http.post(this.baseUrl+'Account/Login',model);
  }
}
