import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment, EditBlog, Tag } from '@app/views/main/_interfaces/blog';
import { Section } from '@app/views/main/_interfaces/section';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(
        private http: HttpClient,) { }

    // Editing specific
    getBlogByID(id: string): Observable<EditBlog> {
        return this.http.get<EditBlog>(`${environment.apiUrl}/editblog/${id}/`)
    }

    blogPost(title: string, slug: string, body: string, image: string, desc: string, authorlock: boolean, author: number[], section: number, tags: number[], id?: string) {
        if (id) {
            return this.http.put(`${environment.apiUrl}/editblog/${id}/`, { title, slug, body, image, desc, authorlock, author, section, tags })
        }
        return this.http.post(`${environment.apiUrl}/editblog/`, { title, slug, body, image, desc, authorlock, author, section, tags })
    }

    getSections(): Observable<Section[]> {
        return this.http.get<Section[]>(`${environment.apiUrl}/section`);
    }

    getSectionByName(section: string): Observable<Section> {
        return this.http.get<Section>(`${environment.apiUrl}/section/${section}`);
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