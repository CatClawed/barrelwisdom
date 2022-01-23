import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/interfaces/user';
import { AuthenticationService } from '@app/services/authentication.service';
import { HistoryService } from '@app/services/history.service';
import { NavigationService, NavItems } from '@app/services/navigation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems: NavItems[];
  user: User;
  mobileView = true;

  constructor(private authenticationService: AuthenticationService,
    public navService: NavigationService,
    public historyService: HistoryService,
    public breakpointObserver: BreakpointObserver,
    public router: Router) {
    }
    
  ngOnInit(): void {
    this.authenticationService.user.subscribe(x => this.user = x);
    this.navService.nav.subscribe(x => {
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
