import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { environment } from '@environments/environment';
import { INavData } from '@coreui/angular';
import { Router, NavigationEnd } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class NavigationService {
  private navSubject: BehaviorSubject<INavData[]>;
  public nav: Observable<INavData[]>;
  public n: INavData[];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private router: Router) {
      this.navSubject = new BehaviorSubject<INavData[]>(this.n);
      this.nav = this.navSubject.asObservable();

      router.events.subscribe(val => {
          if(val instanceof NavigationEnd) {
            let section = router.url.split('/')[1];
            this.getNav(section).subscribe(data => {
              this.n = JSON.parse(data.data);
              this.navSubject.next(this.n);
            },
            error => {
              this.getNav("blog").subscribe(data => {
                this.n = JSON.parse(data.data);
                this.navSubject.next(this.n);
              });
            });
        }});
  }

  getNav(section: string): Observable<any> {
    if(section && section != "tags" && section != "user" && section != "settings" && section != "create") {
        return this.http.get<any>(`${environment.apiUrl}/nav/${section}/`);
    }
    return this.http.get<any>(`${environment.apiUrl}/nav/blog/`);
  }

}