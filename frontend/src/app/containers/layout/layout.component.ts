import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/interfaces/user';
import { AuthenticationService } from '@app/services/authentication.service';
import { DestroyService } from '@app/services/destroy.service';
import { LanguageService } from '@app/services/language.service';
import { NavItems, NavigationService } from '@app/services/navigation.service';
import { TranslationService } from '@app/services/translation.service';
import { LanguageData } from '@environments/language-data';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  providers: [DestroyService]
})
export class LayoutComponent implements OnInit {
  public sidebarMinimized = false; 
  public navItems: NavItems[];
  user: User;
  mobileView = true;
  languages;
  codes;
  currentLang = "en";

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private authenticationService: AuthenticationService,
    private readonly destroy$: DestroyService,
    public navService: NavigationService,
    public breakpointObserver: BreakpointObserver,
    public router: Router) {
    this.codes = LanguageData.language_codes
  }

  ngOnInit(): void {
    this.authenticationService.user
      .pipe(takeUntil(this.destroy$))
      .subscribe(x => this.user = x);
    this.navService.nav
      .pipe(takeUntil(this.destroy$))
      .subscribe(x => {
        this.navItems = x;
      });
    this.translationService.langObserve
      .pipe(takeUntil(this.destroy$))
      .subscribe(x => {
        this.languages = x;
      });
    this.translationService.currentLangObserve
      .pipe(takeUntil(this.destroy$))
      .subscribe(x => {
        this.currentLang = this.translationService.currentLang;
      });

    this.breakpointObserver.observe([
      '(max-width: 800px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
      this.mobileView = result.matches;
    });
  }

  logout() {
    this.authenticationService.logout();
  }

  changeLanguage(lang) {
    let segments = this.router.url.split('/');
    segments.pop();
    let newUrl = "";
    for (let s of segments) {
      if (s) {
        newUrl += '/' + s;
      }
    }
    this.languageService.setLanguage(lang);
    this.router.navigate([newUrl + '/' + lang])
  }
}
