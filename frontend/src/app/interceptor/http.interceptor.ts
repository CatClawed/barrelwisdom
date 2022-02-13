import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import {AppComponent} from '@app/app.component';

// case insensitive check against config and value
const startsWithAny = (arr: string[] = []) => (value = '') => {
    return arr.some(test => value.toLowerCase().startsWith(test.toLowerCase()));
};

// http, https, protocol relative
const isAbsoluteURL = startsWithAny(['http']);

@Injectable()
export class UniversalRelativeInterceptor implements HttpInterceptor {
    isBrowser = false;
    constructor(@Optional() @Inject(REQUEST) protected request: Request) {
        AppComponent.isBrowser.subscribe(isBrowser => {
            if (!isBrowser) {
              this.isBrowser = isBrowser;
            }
          });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (!this.isBrowser) {
            const pathSeparator = !req.url.startsWith('/') ? '/' : '';
            const url = 'http://localhost:8000' + pathSeparator + req.url;
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
}