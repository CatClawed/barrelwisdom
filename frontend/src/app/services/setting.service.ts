// Catch all for the settings page

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class SettingService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  updateEmail(id: number, email: string) {
    return this.http.put(`${environment.authUrl}/users/${id}/`, { email });
  }

  updatePassword(new_password: string, re_new_password: string, current_password: string) {
      return this.http.post(`${environment.authUrl}/users/set_password/`, { new_password, re_new_password, current_password })
  }

  createInvite() {
    return this.http.post(`${environment.apiUrl}/invite/`, {  });
  }

  getInvite(code: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/invite/${code}/`);
  }

  // this will only ever be updated to true
  updateInvite(code: string) {
      let used = true;
      return this.http.put(`${environment.apiUrl}/invite/${code}/`, { used });
  }

  getProfile(user: number): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}/profile/${user}/`);
  }

  updateProfile(user: number, bio: string, website: string, avatar: string) {
    return this.http.put(`${environment.apiUrl}/profile/${user}/`, { user, bio, website, avatar });
  }
}