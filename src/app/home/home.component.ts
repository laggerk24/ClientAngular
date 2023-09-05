import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  register:boolean = false;
  regiterToggle(){
    this.register = !this.register
  }
}
