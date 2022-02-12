import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { environment } from '@environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import {AppComponent} from '@app/app.component';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private navSubject: BehaviorSubject<NavItems[]>;
  public nav: Observable<NavItems[]>;
  public n: NavItems[];
  public blogNav = ['user', 'settings', 'tag', 'login', 'register'];
  previousSection = "";
  absolute = ""

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private router: Router) {
      AppComponent.isBrowser.subscribe(isBrowser => {
        if (!isBrowser) {
          this.absolute = 'http://localhost:8000'
        }
      });
      this.navSubject = new BehaviorSubject<NavItems[]>(this.n);
      this.nav = this.navSubject.asObservable();

      this.router.events.subscribe(val => {
          if(val instanceof NavigationEnd) {
            let section = this.router.url.split('/')[1];
            if(/^\d+/.test(section) || /^create.*/.test(section) || this.blogNav.includes(section) || !section) {
              section = 'blog'
            }
            if(section != this.previousSection) {
              this.previousSection = section;
            this.getNav(section).subscribe({next: data => {
              this.n = JSON.parse(data.data);
              this.navSubject.next(this.n);
            },
            error: () => {
              this.getNav("blog").subscribe(data => {
                this.n = JSON.parse(data.data);
                this.navSubject.next(this.n);
              });
            }});
          }
        }});
  }


  getNav(section: string): Observable<Nav> {
      return this.http.get<Nav>(`${this.absolute}${environment.apiUrl}/nav/${section}/`, this.httpOptions);
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