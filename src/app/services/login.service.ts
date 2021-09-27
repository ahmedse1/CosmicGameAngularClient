import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private generic: GenericService) { }

  authenticate(loginReq) {
    return this.generic.post('api/Login/UserLogin', loginReq);
  }

  register(registerReq) {
    return this.generic.post('api/Login/UserRegister', registerReq);
  }

  forgotPassword(email) {
    return this.generic.post('api/Login/ForgotPassword', email)
  }
}
