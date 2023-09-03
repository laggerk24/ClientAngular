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

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.getUsersData();
    this.setCurrentUser();
  }

  getUsersData() {
    this.http.get<Users[]>('https://localhost:7181/api/Users').subscribe(
      (observer) => {
        console.log('Observable Data', observer);
        this.users = observer;
      },
      (error) => console.log(error),
      () => console.log('Finished')
    );
  }
  setCurrentUser() {
    const user = localStorage.getItem('user');
    if (user) {
      this.accountService.setCurrentUser(JSON.parse(user));
    }
  }
}
