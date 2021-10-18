import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn: string;
  constructor(private authenticationService: LoginService, private router: Router) {
    let currentUser = this.authenticationService.currentUserValue;
    this.isLoggedIn = currentUser && currentUser.result.access_token;
    console.log("ahmed" + this.isLoggedIn);
    this.authenticationService.currentUser.subscribe(
      res => {
        if (!res) { 
          this.router.navigate(['/login']);
        }
        let currentUser = this.authenticationService.currentUserValue;
        this.isLoggedIn = currentUser && currentUser.result.access_token;
        console.log("ehtisham" + this.isLoggedIn);
      }
    )
  }

  ngOnInit(): void {
  }



}
