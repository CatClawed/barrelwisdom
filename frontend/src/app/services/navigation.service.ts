import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '@environments/environment';
import { LanguageData } from '@environments/language-data';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { catchError, filter, first, switchMap, takeUntil, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NavigationService implements OnDestroy {
  private navSubject: BehaviorSubject<NavLanguages>;
  public nav: Observable<any>;
  public n: any;
  public blogNav = ['user', 'settings', 'tag', 'login', 'register', 'moderate', 'create'];
  previousSection = "";
  previousLanguage = "";
  section = "blog";
  private destroy$ = new Subject<void>();

  private langSubject: BehaviorSubject<any>;
  public langObserve: Observable<any>;
  public langOptions = LanguageData.languages['default'];
  public currentLang = "en";
  private currentLangSubject: BehaviorSubject<string>;
  public currentLangObserve: Observable<string>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.navSubject = new BehaviorSubject<any>(this.n);
    this.nav = this.navSubject.asObservable();
    this.langSubject = new BehaviorSubject<any>(this.langOptions);
    this.langObserve = this.langSubject.asObservable();
    this.currentLangSubject = new BehaviorSubject<string>(this.currentLang);
    this.currentLangObserve = this.currentLangSubject.asObservable();

    this.router.events
      .pipe(takeUntil(this.destroy$),
        filter(val => val instanceof NavigationEnd),
        tap(() => {
          let sections = this.router.url.split('?')[0].split('#')[0].split('/')
          this.section = sections[1]
          if (/^\d+/.test(this.section) || this.blogNav.includes(this.section) || !this.section) {
            this.section = 'blog'
          }
          if (sections.length > 3) {
            this.langOptions = LanguageData.languages[this.section] === undefined ? LanguageData.languages['default'] : LanguageData.languages[this.section];
            this.langSubject.next(this.langOptions)
            this.currentLang = sections[sections.length-1]
            this.currentLangSubject.next(this.currentLang)
        }
        else {
            this.langOptions = LanguageData.languages['default'];
            this.langSubject.next(this.langOptions)
            this.currentLang = "en"
            this.currentLangSubject.next(this.currentLang)
        }
        if (this.n !== undefined) {
          if(this.previousLanguage != this.currentLang) {
            this.navSubject.next(this.n[this.currentLang] !== undefined ? this.n[this.currentLang] : this.n["en"]);
          }
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
        try {
          this.n = JSON.parse(data.data);
          this.navSubject.next(this.n[this.currentLang] !== undefined ? this.n[this.currentLang] : this.n["en"]);
        }
        catch (err) {
          console.log('Nav Error: ', err.message)
        }
      })
  }

  getNav(section: string): Observable<Nav> {
    return this.http.get<Nav>(`${environment.apiUrl}/nav/${section}/?v=2`, this.httpOptions);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

export interface NavLanguages {
  en: NavItems[];
  ja: NavItems[]
}

export interface Nav {
  section: string;
  data: string;
}

export interface NavItems {
  name: string;
  url: string;
  icon: string;
  svg: string;
  children: NavItems[];
  expand: boolean;
}