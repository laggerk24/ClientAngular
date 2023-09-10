import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/models';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public account: AccountService, private router:Router, private toastr:ToastrService) {}
  ngOnInit(): void {
  }
  model: any = {};

  login() {
    this.account.login(this.model).subscribe(
      (response) => {
        console.log("navBarlogin",response)
        this.router.navigateByUrl('/members')
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.error);
      }
    );
  }
  logout() {
    this.account.logout();
    this.router.navigateByUrl('/')
  }
}
