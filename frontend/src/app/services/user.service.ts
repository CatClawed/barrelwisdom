import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

import { SimpleUser, UserProfile } from '@app/interfaces/user';

@Injectable({ providedIn: 'root' })
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getUserByName(username: string): Observable<SimpleUser> {
    return this.http.get<SimpleUser>(`${environment.apiUrl}/user/${username}`);
  }

  getUserProfile(username: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${environment.apiUrl}/user/${username}/profile/`);
  }

}