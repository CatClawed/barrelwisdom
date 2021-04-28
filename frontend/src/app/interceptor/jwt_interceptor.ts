import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AuthenticationService } from '@app/services/authentication.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
        private cookieService: CookieService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const user = this.authenticationService.userValue;
        const isLoggedIn = user && this.cookieService.get('access');
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        const isAuthUrl = request.url.startsWith(environment.authUrl);
        if (isLoggedIn && (isApiUrl || isAuthUrl)) {
            let access = this.cookieService.get('access')
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${access}` }
            });
        }
        
        return next.handle(request);
    }
}