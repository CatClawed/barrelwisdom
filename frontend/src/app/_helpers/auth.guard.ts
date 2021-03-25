import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.accountService.userValue;
        if (user) {
            if(localStorage.getItem('refresh')) {
                const jwtToken = JSON.parse(atob(localStorage.getItem('refresh').split('.')[1]));
                const expires = new Date(jwtToken.exp * 1000);
                if(expires.getTime() > Date.now()) {
                    return true;
                }
            }
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}