// Catch all for the settings page

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SettingService {

  constructor(
    private http: HttpClient,
  ) { }

  updatePassword(new_password1: string, new_password2: string, old_password: string) {
    return this.http.post(`${environment.authUrl}/dj-rest-auth/password/change/`, { new_password1, new_password2, old_password })
  }

  createInvite() {
    return this.http.post(`${environment.apiUrl}/invite/`, {});
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