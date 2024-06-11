import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog, BlogPaginator } from '@app/views/main/_interfaces/blog';
import { UserProfile } from '@app/views/main/_interfaces/user';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getBlog(slugtitle: string, section: string): Observable<Blog> {
    return this.http.get<Blog>(`${environment.apiUrl}/blog/${slugtitle}/${section}/`)
  }

  getMainPageBlogs(num: number, limit: number, tag: string): Observable<BlogPaginator> {
    const offset = num == 0 ? 1 : limit * (num - 1);
    if (tag) {
      return this.http.get<BlogPaginator>(`${environment.apiUrl}/blog/?ordering=-created&tags__slugname=${tag}&limit=${limit}&offset=${offset}`)
    }
    return this.http.get<BlogPaginator>(`${environment.apiUrl}/blog/?ordering=-created&limit=${limit}&offset=${offset}`)
  }

  postComment(body: string, blog: number, name: string, parent?: number) {
    if (parent && name) {
      return this.http.post(`${environment.apiUrl}/new/comment/`, { body, parent, name })
    }
    if (parent && !name) {
      return this.http.post(`${environment.apiUrl}/new/comment/`, { body, parent })
    }
    if (!name) {
      return this.http.post(`${environment.apiUrl}/new/comment/`, { body, blog, parent })
    }
    return this.http.post(`${environment.apiUrl}/new/comment/`, { body, blog, parent, name })
  }

  getUserProfile(username: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${environment.apiUrl}/user/${username}/profile/`);
  }
}
