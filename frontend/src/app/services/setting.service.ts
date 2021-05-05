// Catch all for the settings page

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
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

  getProfile(user: number): Observable<any> {
      return this.http.get<any>(`${environment.apiUrl}/profile/${user}/`);
  }

  updateProfile(user: number, bio: string, website: string, avatar: string) {
    return this.http.put(`${environment.apiUrl}/profile/${user}/`, { user, bio, website, avatar });
  }

  getNavigation(section: string) {
    return this.http.get<any>(`${environment.apiUrl}/nav/${section}/`);
  }

  updateNavigation(section: string, data: string) {
    return this.http.put(`${environment.apiUrl}/nav/${section}/`, { section, data });
  }

  createSection(name: string, fullname: string) {
    return this.http.post(`${environment.apiUrl}/section/`, { name, fullname });
  }

  getSections() {
    return this.http.get<any>(`${environment.apiUrl}/section/`);
  }

}