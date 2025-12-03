import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from "@app/services/authentication.service";
import { throwError, timer } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthenticationService);

  return next(req).pipe(
    retry({
      count: 1,
      delay: (error) => {
        if ((error.status >= 400 && error.status < 500) || error.status == 0) {
          throw error;
        }
        return timer(1000);
      }
    }),
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        authService.logout();
      }
      console.error(`HTTP Error ${error.status}:`, error.message);
      return throwError(() => error);
    })
  );
};