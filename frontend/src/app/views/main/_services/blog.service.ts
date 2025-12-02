import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getApiUrl } from '@app/_helpers/api-url';
import { Blog, BlogPaginator } from '@app/views/main/_interfaces/blog';
import { UserProfile } from '@app/views/main/_interfaces/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private apiUrl = getApiUrl();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getBlog(slug: string, section: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/blog/${section}/${slug}/`)
  }

  getMainPageBlogs(num: number, limit: number, tag?: string): Observable<BlogPaginator> {
    const offset = num == 0 ? 1 : limit * (num - 1);
    if (tag) {
      return this.http.get<BlogPaginator>(`${this.apiUrl}/blog/blog/tag/${tag}?limit=${limit}&offset=${offset}`)
    }
    return this.http.get<BlogPaginator>(`${this.apiUrl}/blog/blog/?limit=${limit}&offset=${offset}`)
  }

  postComment(body: string, blog?: number, name?: string, parent?: number) {
    const payload: any = {
      body: body,
    };
    if (name) payload.name = name;
    if (blog) payload.blog = blog;
    if (parent) payload.parent = parent;

    return this.http.post(`${this.apiUrl}/new/comment/`, payload)
  }

  getUserProfile(username: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/user/${username}/profile/`);
  }
}
