import { Component } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  model:any = {}
  
  register(){
    console.log(this.model)
  }
  cancel(){
    console.log("cancelled")
  }
}

