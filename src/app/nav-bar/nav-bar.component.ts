import { Component } from '@angular/core';
import { User } from 'src/Models/models';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private account: AccountService) {}
  model: any = {};
  loggedIn!: boolean;
  login() {
    this.account.login(this.model).subscribe(
      (respone) => {
        console.log(respone);
      },
      (error) => {
        console.log(error);
      }
    );
    this.loggedIn = true;
    this.model.userName='';
    this.model.password='';
  }
  logout(){
    this.loggedIn=false;
    this.account.logout();
  }
}
