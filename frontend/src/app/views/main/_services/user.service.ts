import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment, Blog, Tag, EditBlog } from '@app/views/main/_interfaces/blog';
import { Section } from '@app/views/main/_interfaces/section';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(
        private http: HttpClient,) { }

    // Editing specific
    getBlog(slug: string, section: string): Observable<Blog> {
        return this.http.get<Blog>(`${environment.apiUrl}/blog/${section}/${slug}/`)
    }

    blogPost(b: EditBlog): Observable<Blog> {
        if (b.slug) return this.http.put<Blog>(`${environment.apiUrl}/blog/${b.section}/${b.slug}/`,  b );
        return this.http.post<Blog>(`${environment.apiUrl}/blog/`, b);
    }

    getSections(): Observable<Section[]> {
        return this.http.get<Section[]>(`${environment.apiUrl}/section/`);
    }

    getTags(): Observable<Tag[]> {
        return this.http.get<Tag[]>(`${environment.apiUrl}/tags/`)
    }

    addTags(tags: Tag[]): Observable<any[]> {
        if (tags.length === 0) return of([])
        return this.http.post<any>(`${environment.apiUrl}/tags/`, tags);
    }

    getComments(): Observable<Comment[]> {
        return this.http.get<Comment[]>(`${environment.apiUrl}/comment/`)
    }

    deleteComment(id: number) {
        return this.http.delete(`${environment.apiUrl}/comment/${id}/`)
    }

    approveComment(id: number) {
        return this.http.patch(`${environment.apiUrl}/comment/${id}/`, { id, approved: true })
    }
}