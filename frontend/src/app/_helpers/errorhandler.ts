import { ErrorHandler, inject, Injectable, Injector } from '@angular/core';
import { Router, NavigationError } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private lastAttemptedUrl: string = '/';
  private router: Router = inject(Router);

  handleError(error: Error): void {
    console.error(`Error on route: ${this.router.url}`);
    console.error(GlobalErrorHandler.name, { error });
  }
}