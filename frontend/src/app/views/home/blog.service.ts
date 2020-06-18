import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Blog, BlogPaginator } from './blog';

@Injectable({ providedIn: 'root' })
export class BlogService {

  private blogUrl = '/api/blog/?limit=1&offset=1';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getBlog(): Observable<BlogPaginator> {
    return this.http.get<BlogPaginator>(this.blogUrl)
  }

}