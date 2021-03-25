import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@app/interfaces/user';
import { environment } from "@environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    public u: User = null;

    constructor(private http: HttpClient) {
        let refresh = false;
        if(localStorage.getItem('refresh'))
        {
            const jwtToken = JSON.parse(atob(localStorage.getItem('refresh').split('.')[1]));
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
        return this.http.post<any>(`${environment.apiUrl}/token/`, { username, password })
            .pipe(map(jwt => {
                this.u = new User;
                localStorage.setItem('refresh', jwt.refresh);
                localStorage.setItem('access', jwt.access);
                const jwtToken = JSON.parse(atob(jwt.refresh.split('.')[1]));
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
        localStorage.removeItem('refresh');
        localStorage.removeItem('access');
        this.stopRefreshTokenTimer();
        if(this.userSubject) {
            this.userSubject.next(null);
        }
    }

    refreshToken() {
        return this.http.post<any>(`${environment.apiUrl}/token/refresh/`, {refresh: localStorage.getItem('refresh')})
            .pipe(map(jwt => {
                localStorage.setItem('access', jwt.access);
                this.startRefreshTokenTimer();
                return jwt;
            }
            ));
    }

    private refreshTokenTimeout;

    private startRefreshTokenTimer()
    {
        let timeout = Date.now(); // if something weird happens then the refresh will be attempted immediately
        if(localStorage.getItem('access'))
        {
            const jwtToken = JSON.parse(atob(localStorage.getItem('access').split('.')[1]));
            const expires = new Date(jwtToken.exp * 1000);
            timeout = expires.getTime() - Date.now() - (60 * 1000);
        }
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }

    register(username, email, password, re_password) {
        return this.http.post(`${environment.authUrl}/users/`, { email, username, password, re_password })
        .pipe(map(jwt => {
            return jwt;
        }));
    }

    getInvite(code: string): Observable<any> {
        return this.http.get<any>(`${environment.apiUrl}/invite/${code}/`);
    }
    
    // this will only ever be updated to true
    updateInvite(code: string) {
        let used = true;
        return this.http.put(`${environment.apiUrl}/invite/${code}/`, { used });
    }
}