import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Section } from '@app/interfaces/section';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SectionService {

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