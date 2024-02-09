import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional, OnDestroy } from '@angular/core';
import { REQUEST } from '../../express.tokens';
import { Request } from 'express';
import {AppComponent} from '@app/app.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

// case insensitive check against config and value
const startsWithAny = (arr: string[] = []) => (value = '') => {
    return arr.some(test => value.toLowerCase().startsWith(test.toLowerCase()));
};

// http, https, protocol relative
const isAbsoluteURL = startsWithAny(['http']);

@Injectable()
export class UniversalRelativeInterceptor implements HttpInterceptor, OnDestroy {
    isBrowser = false;
    private destroy$ = new Subject<void>();
    constructor(@Optional() @Inject(REQUEST) protected request: Request) {
        AppComponent.isBrowser
        .pipe(takeUntil(this.destroy$))
        .subscribe(isBrowser => {
            if (!isBrowser) {
              this.isBrowser = isBrowser;
            }
          });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (!this.isBrowser) {
            const pathSeparator = !req.url.startsWith('/') ? '/' : '';
            const url = 'http://backend:8000' + pathSeparator + req.url;
            const serverRequest = req.clone({ url });
            return next.handle(serverRequest);
        }
        if (this.request && !isAbsoluteURL(req.url)) {
            const protocolHost = `${this.request.protocol}://${this.request.get(
                'host'
            )}`;
            const pathSeparator = !req.url.startsWith('/') ? '/' : '';
            const url = protocolHost + pathSeparator + req.url;
            const serverRequest = req.clone({ url });
            return next.handle(serverRequest);
        } else {
            return next.handle(req);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
      }
}