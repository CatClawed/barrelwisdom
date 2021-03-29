import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';

import { Tag } from '@app/interfaces/tag';

@Injectable({ providedIn: 'root' })
export class TagService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${environment.apiUrl}/tags/`)
  }

  getTagByName(slugname: string): Observable<Tag> {
    return this.http.get<Tag>(`${environment.apiUrl}/tags/${slugname}/`)
  }

  addTag(name: string, slugname: string): Observable<Tag> {
    return this.http.post<any>(`${environment.apiUrl}/tags/`, { name, slugname });
  }

}