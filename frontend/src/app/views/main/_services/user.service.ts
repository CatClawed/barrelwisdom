import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getApiUrl } from '@app/_helpers/api-url';
import { Comment, Blog, Tag, EditBlog } from '@app/views/main/_interfaces/blog';
import { Section } from '@app/views/main/_interfaces/section';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    private apiUrl = getApiUrl();

    constructor(
        private http: HttpClient,) { }

    // Editing specific
    getBlog(slug: string, section: string): Observable<Blog> {
        return this.http.get<Blog>(`${this.apiUrl}/blog/${section}/${slug}/`)
    }

    blogPost(b: EditBlog): Observable<Blog> {
        if (b.slug) return this.http.put<Blog>(`${this.apiUrl}/blog/${b.section}/${b.slug}/`,  b );
        return this.http.post<Blog>(`${this.apiUrl}/blog/`, b);
    }

    getSections(): Observable<Section[]> {
        return this.http.get<Section[]>(`${this.apiUrl}/section/`);
    }

    getTags(): Observable<Tag[]> {
        return this.http.get<Tag[]>(`${this.apiUrl}/tags/`)
    }

    addTags(tags: Tag[]): Observable<any[]> {
        if (tags.length === 0) return of([])
        return this.http.post<any>(`${this.apiUrl}/tags/`, tags);
    }

    getComments(): Observable<Comment[]> {
        return this.http.get<Comment[]>(`${this.apiUrl}/comment/`)
    }

    deleteComment(id: number) {
        return this.http.delete(`${this.apiUrl}/comment/${id}/`)
    }

    approveComment(id: number) {
        return this.http.patch(`${this.apiUrl}/comment/${id}/`, { id, approved: true })
    }
}