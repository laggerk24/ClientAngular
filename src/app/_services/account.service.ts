import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject, map, tap } from 'rxjs';
import { User } from 'src/Models/models';

@Injectable({
  providedIn: 'root',
})
export class AccountService implements OnDestroy {
  constructor(private http: HttpClient) {
    console.log('Instance of service is created');
  }

  ngOnDestroy(): void {
    console.log('Account Service getting destroy');
  }

  baseUrl = 'https://localhost:7181/api/';

  private currentUserData = new ReplaySubject<User | null>(1);
  userData$ = this.currentUserData.asObservable();

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'Account/Login', model).pipe(
      map((response: User) => {
        const user = response;
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserData.next(user);
        console.log('Service', user);
        return response;
      })
    );
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserData.next(null);
  }

  setCurrentUser(user: User) {
    this.currentUserData.next(user);
  }
}
