// Catch all for the settings page

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getApiUrl } from '@app/_helpers/api-url';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SettingService {
  private apiUrl = getApiUrl();

  constructor(
    private http: HttpClient,
  ) { }

  updatePassword(new_password1: string, new_password2: string, old_password: string) {
    return this.http.post(`${environment.authUrl}/dj-rest-auth/password/change/`, { new_password1, new_password2, old_password })
  }

  createInvite() {
    return this.http.post(`${this.apiUrl}/invite/`, {});
  }

  getInvite(code: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/invite/${code}/`);
  }

  getProfile(user: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile/${user}/`);
  }

  updateProfile(user: number, bio: string, website: string, avatar: string) {
    return this.http.put(`${this.apiUrl}/profile/${user}/`, { user, bio, website, avatar });
  }

  getNavigation(section: string) {
    return this.http.get<any>(`${this.apiUrl}/nav/${section}/`);
  }

  updateNavigation(section: string, data: string) {
    return this.http.put(`${this.apiUrl}/nav/${section}/`, { section, data });
  }

  createSection(slug: string, name: string) {
    return this.http.post(`${this.apiUrl}/section/`, { slug, name });
  }

  getSections() {
    return this.http.get<any>(`${this.apiUrl}/section/`);
  }
}