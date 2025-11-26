import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error): void {
    const router = this.injector.get(Router);
    const currentRoute = router.url;

    console.error(`Error on route: ${currentRoute}`);
    console.error(error);
  }
}