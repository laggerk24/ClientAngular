import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getusers();
  }

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
