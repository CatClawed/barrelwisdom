import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@app/interfaces/user';
import { environment } from "@environments/environment";
import { CookieService } from 'ngx-cookie-service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService implements OnDestroy {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    public u: User = null;
    private destroy$ = new Subject<void>();

    constructor(private http: HttpClient,
        private cookieService: CookieService) {
        let refresh = false;
        if(this.cookieService.get('refresh'))
        {
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
        this.userSubject = new BehaviorSubject<User>(this.u);
        this.user = this.userSubject.asObservable();

        if(refresh)
        {
            this.startRefreshTokenTimer();
        }
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username, password) {
        return this.http.post<any>(`${environment.authUrl}/token/`, { username, password })
            .pipe(map(jwt => {
                const jwtToken = JSON.parse(atob(jwt.refresh.split('.')[1]));
                const expires = new Date(jwtToken.exp * 1000);
            
                this.u = new User;
                this.cookieService.set('refresh', jwt.refresh, {path: '/', expires: expires});
                this.cookieService.set('access', jwt.access, {path: '/'});
                this.u.username = jwtToken.name;
                this.u.id = jwtToken.user_id;
                this.u.group = jwtToken.group;
                this.userSubject.next(this.u);
                this.startRefreshTokenTimer();
                return jwt;
            }));
    }


    logout() {
        // yeah there are tokens still out there, so what?
        this.cookieService.delete('refresh');
        this.cookieService.delete('access');
        this.stopRefreshTokenTimer();
        if(this.userSubject) {
            this.userSubject.next(null);
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
            const jwtToken = JSON.parse(atob(this.cookieService.get('access').split('.')[1]));
            const expires = new Date(jwtToken.exp * 1000);
            timeout = expires.getTime() - Date.now() - (60 * 1000);
        }
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().pipe(takeUntil(this.destroy$)).subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }

    register(username, email, password, password2, code) {
        return this.http.post(`${environment.authUrl}/reg/`, { username, email, password, password2, code });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
      }
}