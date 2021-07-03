import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '@environments/environment';
import { Blog, EditBlog, BlogPaginator } from '@app/interfaces/blog';


@Injectable({ providedIn: 'root' })
export class BlogService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  // Editing specific
  getBlogByID(id: string): Observable<EditBlog> {
    return this.http.get<EditBlog>(`${environment.apiUrl}/editblog/${id}/`)
  }

  createBlog(title: string, slugtitle: string, body: string, image: string, description: string, authorlock: boolean, author: number[], section: number, tags: number[]) {
    return this.http.post(`${environment.apiUrl}/editblog/`, { title, slugtitle, body, image, description, authorlock, author, section, tags })
  }

  updateBlog(id: string, title: string, slugtitle: string, body: string, image: string, description: string, authorlock: boolean, author: number[], section: number, tags: number[]) {
    return this.http.put(`${environment.apiUrl}/editblog/${id}/`, { title, slugtitle, body, image, description, authorlock, author, section, tags })
  }

  // Reader facing stuff

  getBlog(slugtitle: string, section: string): Observable<Blog> {
    return this.http.get<Blog>(`${environment.apiUrl}/blog/${slugtitle}/${section}`)
  }

  getMainPageBlogs(num: number, limit: number, tag: string): Observable<BlogPaginator> {
    var offset = num == 0 ?  1 : limit * (num-1);
    if(tag) {
      return this.http.get<BlogPaginator>(`${environment.apiUrl}/blog/?ordering=-created&tags=${tag}&limit=${limit}&offset=${offset}`)
    }
    return this.http.get<BlogPaginator>(`${environment.apiUrl}/blog/?ordering=-created&limit=${limit}&offset=${offset}`)
  }

}