import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';

import { Blog } from '@app/interfaces/blog';

import slugify from 'slugify';

@Injectable({ providedIn: 'root' })
export class BlogService {

  private blogUrl = `${environment.apiUrl}/blog/`; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getBlog(title: string): Observable<Blog> {
    return this.http.get<Blog>(this.blogUrl + `?title=` + title)
  }

  getBlogByID(id: string): Observable<Blog> {
    return this.http.get<Blog>(this.blogUrl + id + `/`)
  }

  createBlog(title: string, slugtitle: string, body: string, image: string, description: string, authorlock: boolean, author: number[], section: number, tags: number[]) {
    return this.http.post(this.blogUrl, { title, slugtitle, body, image, description, authorlock, author, section, tags })
  }

  updateBlog(id: string, title: string, slugtitle: string, body: string, image: string, description: string, authorlock: boolean, author: number[], section: number, tags: number[]) {
    return this.http.put(this.blogUrl+id+'/', { title, slugtitle, body, image, description, authorlock, author, section, tags })
  }

}