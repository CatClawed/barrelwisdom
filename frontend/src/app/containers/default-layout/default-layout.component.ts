import { Component, OnInit } from '@angular/core';
import { User } from '@app/interfaces/user';
import { AuthenticationService } from '@app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from '@app/services/navigation.service';

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
    private route: ActivatedRoute,
    private router: Router) {
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
