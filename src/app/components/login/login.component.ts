import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isRemember: boolean;

  constructor() {
    this.username = '';
    this.password = '';
    this.isRemember = false;
   }

  ngOnInit(): void {
  }

  login() {
    console.log(this.username+ '' + this.password + '' + this.isRemember)
  }

}
