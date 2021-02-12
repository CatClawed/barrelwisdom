import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    public u: User = null;
    public token: Observable<string>;

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
            this.refreshToken();
        }
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username, password) {
        return this.http.post<any>(`/api/token/`, { username, password })
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
        return this.http.post<any>(`api/token/refresh`, {}, { withCredentials: true })
            .pipe(map((jwt) => {
                localStorage.setItem('access', jwt.access);
                this.startRefreshTokenTimer();
                return jwt;
            }));
    }

    private refreshTokenTimeout;

    private startRefreshTokenTimer()
    {
        const jwtToken = JSON.parse(atob(localStorage.getItem('refresh').split('.')[1]));
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}