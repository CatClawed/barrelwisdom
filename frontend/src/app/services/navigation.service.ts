import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { catchError, filter, first, switchMap, takeUntil, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NavigationService implements OnDestroy {
  private navSubject: BehaviorSubject<NavItems[]>;
  public nav: Observable<NavItems[]>;
  public n: NavItems[];
  public blogNav = ['user', 'settings', 'tag', 'login', 'register', 'moderate'];
  previousSection = "";
  section = "blog";
  private destroy$ = new Subject<void>();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.navSubject = new BehaviorSubject<NavItems[]>(this.n);
    this.nav = this.navSubject.asObservable();

    this.router.events
      .pipe(takeUntil(this.destroy$),
        filter(val => val instanceof NavigationEnd),
        tap(() => {
          this.section = this.router.url.split('/')[1];
          if (/^\d+/.test(this.section) || /^create.*/.test(this.section) || this.blogNav.includes(this.section) || !this.section) {
            this.section = 'blog'
          }
        }),
        filter(() => this.section != this.previousSection),
        switchMap(() =>
          this.getNav(this.section).pipe(
            first(),
            catchError(() => { return of({ data: '[]' }) })
          )
        )
      )
      .subscribe(data => {
        this.previousSection = this.section;
        this.n = JSON.parse(data.data);
        this.navSubject.next(this.n);
      })
  }

  getNav(section: string): Observable<Nav> {
    return this.http.get<Nav>(`${environment.apiUrl}/nav/${section}/`, this.httpOptions);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

export interface Nav {
  section: string;
  data: string;
}

export interface NavItems {
  name: string;
  url: string;
  icon: string;
  children: NavItems[];
  expand: boolean;
}