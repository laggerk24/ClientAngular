import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export default class authGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}
  canActivate(): Observable<boolean> {
    return this.accountService.userData$.pipe(
      map((user) => {
        if (user) {
          console.log("Inside auth true")
          return true;}
        else{
          console.log("Inside auth false")
          this.toastr.error('You shall not pass');
          return false;
        }
      })
    );
  }
}
