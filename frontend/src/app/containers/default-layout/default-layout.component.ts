import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { navItems } from '@app/_nav';
import { User } from '@app/interfaces/user';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  user: User;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
}

logout() {
  this.authenticationService.logout();
}

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
