import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router, NavigationError } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private lastAttemptedUrl: string = '/';
  private router: Router;

  constructor(private injector: Injector) {
    this.router = this.injector.get(Router);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationError) {
        this.lastAttemptedUrl = event.url;
      }
    });
  }

  handleError(error: Error): void {
    console.error(`Error on route: ${this.lastAttemptedUrl}`);
    console.error(error);
  }
}