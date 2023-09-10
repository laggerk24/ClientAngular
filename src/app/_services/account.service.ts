import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, map, tap } from 'rxjs';
import { User } from 'src/Models/models';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {
  }
  baseUrl = 'https://localhost:7181/api/';

  private currentUserData = new ReplaySubject<User | null>(1);
  userData$ = this.currentUserData.asObservable();

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'Account/Register', model).pipe(
      map((user: User) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserData.next(user);
          return user;
      })
    );
  }

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'Account/Login', model).pipe(
      map((response: User) => {
          localStorage.setItem('user', JSON.stringify(response));
          this.currentUserData.next(response);
          console.log('Service', response);
          return response;
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserData.next(null);
    
  }

  setCurrentUser(user: User | null) {
    this.currentUserData.next(user);
  }
}
