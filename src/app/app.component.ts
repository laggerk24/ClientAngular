import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/Models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Showing Users From Db';
  users!: Users[];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this.http.get<Users[]>('https://localhost:7181/api/Users').subscribe((observer)=>{
      console.log('Observable Data',observer)
      this.users = observer
    },
    (error)=>
    console.log(error),
    ()=>
    console.log('Finished'))
  }
}
