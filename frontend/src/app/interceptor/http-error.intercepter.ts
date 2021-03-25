import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse }
    from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from "@app/services/authentication.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router, private authenticationService: AuthenticationService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {

                    if (error.status == 401) {
                        this.authenticationService.logout();
                    }
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        console.error(`${error.error.message}`);
                    }
                    return throwError(error);
                }),
            )
    }
}
