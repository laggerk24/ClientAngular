import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/Models/models';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Showing Users From Db';
  users!: Users[];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    this.accountService.setCurrentUser(null);
    const user = localStorage.getItem('user');
    if (user) {
      this.accountService.setCurrentUser(JSON.parse(user));
    }
  }
}
