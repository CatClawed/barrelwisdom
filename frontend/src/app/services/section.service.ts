import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

import { Section } from '@app/interfaces/section';

@Injectable({ providedIn: 'root' })
export class SectionService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(`${environment.apiUrl}/section`);
  }

  getSectionByName(section: string): Observable<Section> {
    return this.http.get<Section>(`${environment.apiUrl}/section/${section}`);
  }

}