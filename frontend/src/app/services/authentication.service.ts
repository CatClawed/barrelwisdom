import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user';
import jwtDecode, { JwtPayload } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    public u: User;
    public token: Observable<string>;

    constructor(private http: HttpClient) {
        this.u = new User;
        let payload = jwtDecode<string>(localStorage.getItem('refresh'));
        this.u.username = JSON.parse(JSON.stringify(payload)).name;
        this.u.id = JSON.parse(JSON.stringify(payload)).id;
        this.userSubject = new BehaviorSubject<User>(this.u);
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username, password) {
        return this.http.post<any>(`/api/token/`, { username, password })
            .pipe(map(jwt => {
                localStorage.setItem('refresh', jwt.refresh);
                localStorage.setItem('access', jwt.access);
                let payload = jwtDecode<string>(jwt.refresh);
                this.u.username = JSON.parse(JSON.stringify(payload)).name;
                this.u.id = JSON.parse(JSON.stringify(payload)).id;
                this.userSubject.next(this.u); 
                return jwt;
            }));
    }


    logout() {
        // yeah there are tokens still out there, so what?
        localStorage.removeItem('refresh');
        localStorage.removeItem('access');
        this.userSubject.next(null);
    }
}