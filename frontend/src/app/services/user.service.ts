import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from '@app/interfaces/user';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getUserProfile(username: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${environment.apiUrl}/user/${username}/profile/`);
  }
}