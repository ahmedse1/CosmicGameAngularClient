import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginRequest } from 'src/app/models/login/login-request';
import { LoginResponse } from 'src/app/models/login/login-response';
import { RegisterRequest } from 'src/app/models/register/register-request';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { RegisterResponse } from 'src/app/models/register/register-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRequest: LoginRequest;
  loginResponse: LoginResponse;
  registerRequest: RegisterRequest;
  registerResponse: RegisterResponse;
  emailForPassword: string;

  constructor(private loginService: LoginService, private router: Router, private _cookieService: CookieService, private toastr: ToastrService) {
    this.loginRequest = new LoginRequest();
    this.registerRequest = new RegisterRequest();
    this.emailForPassword = '';
   }

  ngOnInit(): void {
  }

  login() {
    debugger;
    if(this.loginRequest.UserName == '' || this.loginRequest.UserName == null || this.loginRequest.UserName == undefined) {
      this.toastr.info('Username cannot be empty!');
      return;
    }
    if(this.loginRequest.Password == '' || this.loginRequest.Password == null || this.loginRequest.Password == undefined) {
      this.toastr.info('Password cannot be empty!');
      return;
    }
    this.loginRequest.deviceinfo = navigator.userAgent;
    this.loginRequest.URL = window.location.href;
    this.loginService.authenticate(this.loginRequest).subscribe (
      res => {
        debugger;
        this.loginResponse = res;
        if(this.loginResponse.success == true && this.loginResponse.status == '200') {
          // ADD USERNAME AND PASSWORD (ENCRYPTED) IN SESSION STORAGE

          sessionStorage.setItem('accessToken', this.loginResponse.result.access_token);
          if(this.loginRequest.IsRemember) {
            this._cookieService.set('username', this.loginRequest.UserName, 30);
            this._cookieService.set('password', this.loginRequest.Password, 30);
          }
          this.router.navigate(['/home']);
        }
        else {
          this.router.navigate(['/']);
        }
        console.log(res);
      }
    )
  }

  registerUser() {
    if(this.registerRequest.Password == this.registerRequest.ConfirmPassword) {
      this.registerRequest.URL = window.location.href;
      this.loginService.register(this.registerRequest).subscribe (
        res => {
          this.registerResponse = res;
          if(this.registerResponse && this.registerResponse != null || this.registerResponse != undefined) {
            if(this.registerResponse.success) {
              this.toastr.success(this.registerResponse.message);
              this.router.navigate(['/registerSuccess']);
            }
            else {
              this.toastr.error(this.registerResponse.message);
            }
          }
        }
      );
    }
  }

  forgotPassword() {
    debugger;
    if(this.emailForPassword != "") {
      this.registerRequest.Email = this.emailForPassword;
      this.loginService.forgotPassword(this.registerRequest).subscribe (
        res => {
          if(res) {
            this.registerResponse = res;
            if(this.registerResponse.success) {
              this.toastr.success(this.registerResponse.message);
            }
          }
          
        }
      )
    }
  }

}
