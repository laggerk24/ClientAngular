import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/models';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public account: AccountService) {}
  ngOnInit(): void {
  }
  model: any = {};

  login() {
    this.account.login(this.model).subscribe(
      (response) => {
        console.log("navBarlogin",response)
      },
      (error) => {
        console.log(error);
        alert(error.error);
      }
    );
  }
  logout() {
    this.account.logout();
  }
}
