import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { APP_ID, NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { LayoutComponent } from '@app/containers';
import { HttpErrorInterceptor } from '@app/_helpers/interceptor/http-error.interceptor';
import { JwtInterceptor } from '@app/_helpers/interceptor/jwt_interceptor';
import { CookieService } from 'ngx-cookie-service';

const APP_CONTAINERS = [
  LayoutComponent
];

@NgModule({ declarations: [
        AppComponent,
        ...APP_CONTAINERS
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatMenuModule,
        AppRoutingModule], providers: [
        provideClientHydration(),
        {
            provide: APP_ID,
            useValue: 'frontend'
        },
        CookieService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
