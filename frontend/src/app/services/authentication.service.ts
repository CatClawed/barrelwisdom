import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, signal } from '@angular/core';
import { User } from '@app/views/main/_interfaces/user';
import { environment } from "@environments/environment";
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService implements OnDestroy {
    userSignal = signal<User>(null)
    public u: User = null;

    constructor(private http: HttpClient,
        private cookieService: CookieService) {
        let refresh = false;
        if(this.cookieService.get('refresh'))
        {
            try {
                const jwtToken = JSON.parse(atob(this.cookieService.get('refresh').split('.')[1]));
                const expires = new Date(jwtToken.exp * 1000);
                if(expires.getTime() > Date.now())
                    {
                        this.u = new User;
                        this.u.username = jwtToken.name;
                        this.u.id = jwtToken.user_id;
                        this.u.group = jwtToken.group;
                        refresh = true;
                    }
                    else {
                        this.logout();
                    }
            }
            catch (err) {
                console.log('Auth Error: ', err.message);
            }
        }
        this.userSignal.set(this.u)

        if(refresh)
        {
            this.startRefreshTokenTimer();
        }
    }

    public get userValue(): User {
        return this.userSignal();
    }

    login(username, password) {
        return this.http.post<any>(`${environment.authUrl}/token/`, { username, password })
            .pipe(map(jwt => {
                try {
                    const jwtToken = JSON.parse(atob(jwt.refresh.split('.')[1]));
                    const expires = new Date(jwtToken.exp * 1000);

                    this.u = new User;
                    this.cookieService.set('refresh', jwt.refresh, {path: '/', expires: expires});
                    this.cookieService.set('access', jwt.access, {path: '/'});
                    this.u.username = jwtToken.name;
                    this.u.id = jwtToken.user_id;
                    this.u.group = jwtToken.group;
                    this.userSignal.set(this.u)
                    this.startRefreshTokenTimer();
                    return jwt;
                }
                catch (err) {
                    console.log('Auth Error: ', err.message);
                }
            }));
    }


    logout() {
        // yeah there are tokens still out there, so what?
        this.cookieService.delete('refresh');
        this.cookieService.delete('access');
        this.stopRefreshTokenTimer();
        if(this.userSignal()) {
            this.userSignal.set(null);
        }
    }

    refreshToken() {
        return this.http.post<any>(`${environment.authUrl}/token/refresh/`, {refresh: this.cookieService.get('refresh')})
            .pipe(map(jwt => {
                this.cookieService.set('access', jwt.access, {path: '/'});
                this.startRefreshTokenTimer();
                return jwt;
            }
            ));
    }

    private refreshTokenTimeout;

    private startRefreshTokenTimer()
    {
        let timeout = Date.now(); // if something weird happens then the refresh will be attempted immediately
        if(this.cookieService.get('access'))
        {
            try {
                const jwtToken = JSON.parse(atob(this.cookieService.get('access').split('.')[1]));
                const expires = new Date(jwtToken.exp * 1000);
                timeout = expires.getTime() - Date.now() - (60 * 1000);
            }
            catch (err) {
                console.error('Auth Error: ', err.message);
            }

        }
        this.refreshTokenTimeout = setTimeout(() =>
            this.refreshToken()
            .subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }

    register(username, email, password, password2, code) {
        return this.http.post(`${environment.authUrl}/reg/`, { username, email, password, password2, code });
    }

    ngOnDestroy() {
        this.stopRefreshTokenTimer();
      }
}