import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BlogPaginator } from '@app/interfaces/blog';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class BlogPaginatorService {

  private blogUrl = `${environment.apiUrl}/blog/?ordering=-created`; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getBlog(num: number, limit: number): Observable<BlogPaginator> {
    var offset = num == 0 ?  1 : limit * (num-1);
    return this.http.get<BlogPaginator>(this.blogUrl + '&limit=' + limit.toString(10) + '&offset=' + offset.toString(10))
  }

}