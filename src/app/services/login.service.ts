import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginResponse } from '../models/login/login-response';
import { User } from '../models/user';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<LoginResponse>;
  public currentUser: Observable<LoginResponse>;
  constructor(private generic: GenericService) {
    this.currentUserSubject = new BehaviorSubject<LoginResponse>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): LoginResponse {
    return this.currentUserSubject.value;
  }

  authenticate(loginReq) {
    return this.generic.postWithoutAuth('api/Login/UserLogin', loginReq);
  }

  register(registerReq) {
    return this.generic.postWithoutAuth('api/Login/UserRegister', registerReq);
  }

  forgotPassword(email) {
    return this.generic.postWithoutAuth('api/Login/ForgotPassword', email)
  }

  login(loginReq) {
    return this.authenticate(loginReq)
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            if (user !== "Invalid credientials") {
                localStorage.setItem('currentUser', JSON.stringify(user));
                let us = user as LoginResponse;
                this.currentUserSubject.next(us);
            }
            return user;
        }));
}

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    sessionStorage.removeItem('accessToken');
}
}
