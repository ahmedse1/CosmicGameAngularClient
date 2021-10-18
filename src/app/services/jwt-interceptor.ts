import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: LoginService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.result.access_token;
        const isApiUrl = request.url.startsWith(environment.baseUrl);
        if (isLoggedIn ) {
            // request = request.clone({
            //     setHeaders: {
            //         Authorization: `Bearer ${currentUser.result.access_token}`
            //     }
            // });
        }
        return next.handle(request);
    }
}