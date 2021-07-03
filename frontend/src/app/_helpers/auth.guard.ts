import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '@app/services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AuthenticationService,
        private cookieService: CookieService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.accountService.userValue;
        if (user) {
            if(this.cookieService.get('access')) {
                const jwtToken = JSON.parse(atob(this.cookieService.get('access').split('.')[1]));
                const expires = new Date(jwtToken.exp * 1000);
                if(expires.getTime() > Date.now()) {
                    return true;
                }
            }
        }
        else {
            return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url }});
        }
    }
}