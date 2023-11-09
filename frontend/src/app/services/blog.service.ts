import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '@environments/environment';
import { Blog, EditBlog, BlogPaginator, Comment } from '@app/interfaces/blog';


@Injectable({ providedIn: 'root' })
export class BlogService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
    ) { }

  // Editing specific
  getBlogByID(id: string): Observable<EditBlog> {
    return this.http.get<EditBlog>(`${environment.apiUrl}/editblog/${id}/`)
  }

  blogPost(title: string, slugtitle: string, body: string, image: string, description: string, authorlock: boolean, author: number[], section: number, tags: number[], id?: string) {
    if (id) {
      return this.http.put(`${environment.apiUrl}/editblog/${id}/`, { title, slugtitle, body, image, description, authorlock, author, section, tags })
    }
    return this.http.post(`${environment.apiUrl}/editblog/`, { title, slugtitle, body, image, description, authorlock, author, section, tags })
  }

  // Reader facing stuff

  getBlog(slugtitle: string, section: string): Observable<Blog> {
    return this.http.get<Blog>(`${environment.apiUrl}/blog/${slugtitle}/${section}/`)
  }

  getMainPageBlogs(num: number, limit: number, tag: string): Observable<BlogPaginator> {
    const offset = num == 0 ?  1 : limit * (num-1);
    if(tag) {
      return this.http.get<BlogPaginator>(`${environment.apiUrl}/blog/?ordering=-created&tags=${tag}&limit=${limit}&offset=${offset}`)
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

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.apiUrl}/comment/`)
  }

  deleteComment(id: number) {
    return this.http.delete(`${environment.apiUrl}/comment/${id}/`)
  }

  approveComment(id: number) {
    return this.http.patch(`${environment.apiUrl}/comment/${id}/`, {id, approved: true})
  }

}