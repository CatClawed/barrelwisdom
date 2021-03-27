import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

import { SimpleUser } from '@app/interfaces/user';

@Injectable({ providedIn: 'root' })
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getUserByID(id: number): Observable<SimpleUser> {
    return this.http.get<SimpleUser>(`${environment.apiUrl}/user/id/${id}`);
  }

  getUserByName(username: string): Observable<SimpleUser> {
    return this.http.get<SimpleUser>(`${environment.apiUrl}/user/name/${username}`);
  }

}