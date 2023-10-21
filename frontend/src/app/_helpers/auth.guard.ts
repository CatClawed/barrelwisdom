import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';
import { CookieService } from 'ngx-cookie-service';

export const AuthGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const cookieService = inject(CookieService);
    const accountService = inject(AuthenticationService);
    const router = inject(Router);

    if (accountService.userValue) {
        if(cookieService.get('access')) {
            const jwtToken = JSON.parse(atob(cookieService.get('access').split('.')[1]));
            const expires = new Date(jwtToken.exp * 1000);
            if(expires.getTime() > Date.now()) {
                return true;
            }
        }
    }
    else {
        return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url }});
    }
}