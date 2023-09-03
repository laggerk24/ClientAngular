import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/models';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private account: AccountService) {}
  ngOnInit(): void {
    this.getCurrentUser();
  }
  model: any = {};
  loggedIn!: boolean;

  login() {
    this.account.login(this.model).subscribe(
      (response) => {
        this.loggedIn = true;
      },
      (error) => {
        console.log(error);
        alert(error.error);
      }
    );
  }
  logout() {
    this.loggedIn = false;
    this.account.logout();
  }

  getCurrentUser() {
    this.account.userData$.subscribe((user) => {
      if (user) {
        this.model = user;
        this.loggedIn = !!user;
      }
    },(error)=>{
      console.log(error)
    });
  }
}
