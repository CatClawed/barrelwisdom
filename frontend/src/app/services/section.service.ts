import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';

import { Section } from '@app/interfaces/section';

@Injectable({ providedIn: 'root' })
export class SectionService {

  private sectionUrl = `${environment.apiUrl}/section`; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.sectionUrl);
  }

}