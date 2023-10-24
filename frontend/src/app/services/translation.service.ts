import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TranslationService implements OnDestroy {
  private langSubject: BehaviorSubject<any>;
  public langObserve: Observable<any>;
  public langOptions = environment.languages['default'];
  public currentLang = "en";
  private destroy$ = new Subject<void>();
  private currentLangSubject: BehaviorSubject<any>;
  public currentLangObserve: Observable<any>;

  constructor(
    private router: Router) {
      this.langSubject = new BehaviorSubject<any>(this.langOptions);
      this.langObserve = this.langSubject.asObservable();
      this.currentLangSubject = new BehaviorSubject<any>(this.currentLang);
      this.currentLangObserve = this.currentLangSubject.asObservable();

      this.router.events
      .pipe(takeUntil(this.destroy$))
        .subscribe(val => {
          if(val instanceof NavigationEnd) {
            let sections = this.router.url.split('?')[0].split('#')[0].split('/')
            let section = sections[1];
            if (sections.length > 3) {
                this.langOptions = environment.languages[section] === undefined ? environment.languages['default'] : environment.languages[section];
                this.langSubject.next(this.langOptions)
                this.currentLang = sections[sections.length-1]
                this.currentLangSubject.next(this.currentLang)
            }
            else {
                this.langOptions = environment.languages['default'];
                this.langSubject.next(this.langOptions)
                this.currentLang = "en"
                this.currentLangSubject.next(this.currentLang)
            }
        }});
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}