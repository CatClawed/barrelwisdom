import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from '@app/interfaces/tag';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class TagService {

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
  addTags(tags: Tag[]): Observable<any[]> {
    if (tags.length === 0) return of([]) 
    return this.http.post<any>(`${environment.apiUrl}/tags/`, tags);
  }
}