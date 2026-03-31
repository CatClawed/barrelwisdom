import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { getApiUrl } from '@app/_helpers/api-url';
import { LanguageData } from '@environments/language-data';
import { Observable, of } from 'rxjs';
import { catchError, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private apiUrl = getApiUrl();
  private router = inject(Router);
  private http = inject(HttpClient);
  public blogNav = ['user', 'settings', 'tag', 'login', 'register', 'moderate', 'create'];

  private routeState$ = this.router.events.pipe(
    filter(e => e instanceof NavigationEnd),
    map(() => this.parseUrl(this.router.url))
  );
  public section = toSignal(this.routeState$.pipe(map(s => s.section)), { initialValue: 'default' });
  public currentLang = toSignal(this.routeState$.pipe(map(s => s.lang)), { initialValue: 'en' });
  public en_only = toSignal(this.routeState$.pipe(map(s => s.en_only)), { initialValue: false });

  public langOptions = computed(() => {
    return LanguageData.languages[this.section()] ?? LanguageData.languages['default'];
  });

  private rawNavData = toSignal(
    this.routeState$.pipe(
      map(s => ({ section: s.section, lang: s.lang })),
      distinctUntilChanged((prev, curr) =>
        prev.section === curr.section && prev.lang === curr.lang
      ),

      switchMap(state =>
        this.getNav(state.section).pipe(
          catchError(err => {
            console.error('Nav Error:', err);
            return of({ data: '[]' });
          })
        )
      ),
      map(response => {
        try {
          return JSON.parse(response.data);
        } catch {
          return {};
        }
      })
    ),
    { initialValue: {} }
  );

  public navigation = computed(() => {
    const data = this.rawNavData();
    const lang = this.currentLang();
    return data[lang] !== undefined ? data[lang] : data['en'];
  });

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private parseUrl(url: string) {
    let sections = url.split('?')[0].split('#')[0].split('/');
    let section = sections[1];

    if (/^\d+/.test(section) || this.blogNav.includes(section) || !section) {
      section = 'blog';
    }
    let lang = 'en';
    let en_only = false;
    if (sections.length > 3) {
      lang = sections[sections.length - 1];
    }
    else {
      en_only = true;
    }

    return { section, lang, en_only };
  }

  getNav(section: string): Observable<Nav> {
    return this.http.get<Nav>(`${this.apiUrl}/nav/${section}/?v=1`, this.httpOptions);
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
  svg: string;
  children: NavItems[];
  expand: boolean;
}