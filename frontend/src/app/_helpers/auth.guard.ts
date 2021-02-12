import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import jwtDecode, { JwtPayload } from 'jwt-decode';

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
                let payload = jwtDecode<string>(localStorage.getItem('refresh'));
                const expires = new Date(JSON.parse(JSON.stringify(payload)).exp);
                if(expires.getTime() * 1000 > Date.now()) {
                    return true;
                }
            }

        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}