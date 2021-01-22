import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../interfaces/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    public token: Observable<string>;

    constructor(private http: HttpClient) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username, password) {
        return this.http.post<any>(`/api-auth/login2/`, { username, password })
            .pipe(map(user => {
                localStorage.setItem('user', JSON.stringify(user.user));
                localStorage.setItem('token', user.token);
                this.userSubject.next(user.user);
                return user;
            }));
    }


    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.userSubject.next(null);
    }
}