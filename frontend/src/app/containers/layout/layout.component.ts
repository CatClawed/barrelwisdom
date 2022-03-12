import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/interfaces/user';
import { AuthenticationService } from '@app/services/authentication.service';
import { NavigationService, NavItems } from '@app/services/navigation.service';
import { takeUntil } from 'rxjs/operators';
import { DestroyService } from '@app/services/destroy.service';

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

  constructor(private authenticationService: AuthenticationService,
    private readonly destroy$: DestroyService,
    public navService: NavigationService,
    public breakpointObserver: BreakpointObserver,
    public router: Router) {
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

    this.breakpointObserver.observe([
      '(max-width: 800px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.mobileView = true;
      }
      else {
        this.mobileView = false;
      }
    });
  }

logout() {
  this.authenticationService.logout();
}

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
