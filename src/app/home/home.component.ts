import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http:HttpClient){}
  users:any
  register:boolean = false;
  regiterToggle(){
    this.register = !this.register
  }
  getusers()
  {
    this.http.get('https://localhost:7181/api/Users').subscribe(users => this.users=users)
  }
}
