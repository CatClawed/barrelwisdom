import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, ErrorHandler, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { GlobalErrorHandler } from '@app/_helpers/errorhandler';
import { httpErrorInterceptor } from '@app/_helpers/interceptor/http-error.interceptor';
import { JwtInterceptor } from '@app/_helpers/interceptor/jwt_interceptor';
import { routes } from '@app/app.routes';



export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
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
