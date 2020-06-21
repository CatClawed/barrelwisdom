import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Blog } from '../interfaces/blog';

@Injectable({ providedIn: 'root' })
export class BlogService {

  private blogUrl = '/api/blog/?title='; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getBlog(title: string): Observable<Blog> {
    return this.http.get<Blog>(this.blogUrl + title)
  }

}