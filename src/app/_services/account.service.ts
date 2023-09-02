import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { map } from 'rxjs';
import { User } from 'src/Models/models';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnDestroy{

  constructor(private http: HttpClient) { 
    console.log("Instance of service is created");
  }
  
  ngOnDestroy(): void {
    console.log("Account Service getting destroy");
  }

  baseUrl = 'https://localhost:7181/api/';

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'Account/Login', model).pipe(
      map((response: User) => {
        const user= response;
        if(user)
        {
          localStorage.setItem('user',JSON.stringify(user))
        }
      })
    )
  }
  logout(){
    localStorage.removeItem('user');
  }
}
