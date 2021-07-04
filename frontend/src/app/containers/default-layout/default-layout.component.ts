import { Component, OnInit } from '@angular/core';
import { User } from '@app/interfaces/user';
import { AuthenticationService } from '@app/services/authentication.service';
import { NavigationService } from '@app/services/navigation.service';
import { HistoryService } from '@app/services/history.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems;
  user: User;
  previousRoute: string;
  currentRoute: string;

  constructor(private authenticationService: AuthenticationService,
    public navService: NavigationService,
    public historyService: HistoryService) {
    }
    
  ngOnInit(): void {
    this.authenticationService.user.subscribe(x => this.user = x);
    this.navService.nav.subscribe(x => {
      this.navItems = x;
    });
  }

logout() {
  this.authenticationService.logout();
}

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
