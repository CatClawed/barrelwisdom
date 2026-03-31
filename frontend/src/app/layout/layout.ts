import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { LanguageService } from '@app/services/language.service';
import { NavigationService } from '@app/services/navigation.service';
import { CringeAdComponent } from '@app/views/_components/cringe/cringe.component';
import { LanguageData } from '@environments/language-data';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  imports: [CringeAdComponent, RouterOutlet, RouterLink, MatSidenavModule,
    MatMenuModule,]
})
export class LayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private cdr = inject(ChangeDetectorRef);
  private breadcrumbService = inject(BreadcrumbService);
  private languageService = inject(LanguageService);
  private authenticationService = inject(AuthenticationService);
  public navService = inject(NavigationService);
  public router = inject(Router);
  desktopView = false;

  private breakpointSubscription = this.breakpointObserver.observe([
    '(min-width: 800px)'])
    .pipe(takeUntilDestroyed())
    .subscribe(result => {
      this.desktopView = result.matches;
      this.cdr.markForCheck();
    });

  public nav = this.navService.navigation;
  user = this.authenticationService.userSignal;
  languages = this.navService.langOptions;
  codes = LanguageData.language_codes;
  currentLang = this.navService.currentLang;
  bread = this.breadcrumbService.breadcrumbs;
  error = this.breadcrumbService.error;
  en_only = this.navService.en_only;

  logout() {
    this.authenticationService.logout();
  }

  changeLanguage(lang: string) {
    const urlTree = this.router.parseUrl(this.router.url);
    const segments = urlTree.root.children['primary']?.segments;

    if (segments && segments.length > 0) {
      segments[segments.length - 1].path = lang;
      this.languageService.setLanguage(lang);
      this.router.navigate(
        ['/', ...segments.map(s => s.path)],
        {
          queryParams: {},
          fragment: null
        }
      );
    }
  }
}
