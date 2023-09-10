import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent{
  constructor(private accountService:AccountService, private toastr:ToastrService){}

  @Output() cancelRegister = new EventEmitter();

  model:any = {}
  
  register(){
    this.accountService.register(this.model).subscribe(response =>{
      console.log("New User",response)
      this.cancel();
    },(error)=>{
      console.log("registeration",error)
      this.toastr.error(error.error)
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
  }
}

