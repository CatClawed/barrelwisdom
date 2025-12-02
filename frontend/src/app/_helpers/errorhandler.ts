import { ErrorHandler, inject, Injectable, Injector } from '@angular/core';
import { Router, NavigationError } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private lastAttemptedUrl: string = '/';
  private router: Router = inject(Router);

  /*
  constructor() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationError) {
        this.lastAttemptedUrl = event.url;
      }
    });
  }*/

  handleError(error: Error): void {
    console.error(`Error on route: ${this.router.url}`);
    console.error(GlobalErrorHandler.name, { error });
  }
}