import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router, NavigationError } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private lastAttemptedUrl: string = '/';

  constructor(private injector: Injector) {
    const router = this.injector.get(Router);

    router.events.subscribe(event => {
      if (event instanceof NavigationError) {
        this.lastAttemptedUrl = event.url;
      }
    });
  }

  handleError(error: Error): void {
    const router = this.injector.get(Router);
    console.error(`Error on route: ${this.lastAttemptedUrl}`);
    console.error('Registered routes:', router.config);
    console.error(`here have this ${router.url}`)
    console.error(error);
  }
}