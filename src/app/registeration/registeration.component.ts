import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.usersFromHome)
  }
  @Input() usersFromHome:any;
  model:any = {}
  
  register(){
    console.log(this.model)
  }
  cancel(){
    console.log("cancelled")
  }
}

