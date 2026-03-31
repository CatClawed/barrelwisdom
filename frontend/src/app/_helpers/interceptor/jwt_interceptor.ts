import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from '@app/services/authentication.service';
import { environment } from '@environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

export const JwtInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>,
    next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const authService = inject(AuthenticationService);
    const cookieService = inject(CookieService);

    const user = authService.userValue;
    const access = cookieService.get('access');
    const isLoggedIn = !!user && !!access;
    const isApiUrl = req.url.startsWith(environment.apiUrl);
    const isAuthUrl = req.url.startsWith(environment.authUrl);

    if (isLoggedIn && (isApiUrl || isAuthUrl)) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${access}`
            }
        });
    }
    return next(req);
};