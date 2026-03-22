import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, ErrorHandler, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ExtraOptions, provideRouter, withRouterConfig } from '@angular/router';
import { GlobalErrorHandler } from '@app/_helpers/errorhandler';
import { httpErrorInterceptor } from '@app/_helpers/interceptor/http-error.interceptor';
import { JwtInterceptor } from '@app/_helpers/interceptor/jwt_interceptor';
import { routes } from '@app/app.routes';
import { provideServiceWorker } from '@angular/service-worker';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withRouterConfig(routerOptions)),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withInterceptors([
        httpErrorInterceptor,
        JwtInterceptor
      ]),
      withFetch()
    ),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ]
};
