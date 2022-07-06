import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { LayoutComponent } from '@app/containers';
import { HttpErrorInterceptor } from '@app/interceptor/http-error.intercepter';
import { JwtInterceptor } from '@app/interceptor/jwt_interceptor';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { CookieService } from 'ngx-cookie-service';
import { MarkdownModule } from 'ngx-markdown';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const APP_CONTAINERS = [
  LayoutComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'frontend' }),
    BrowserAnimationsModule,
    PerfectScrollbarModule,
    HttpClientModule,
    MarkdownModule.forRoot({sanitize: SecurityContext.NONE}),
    TransferHttpCacheModule,
    BrowserTransferStateModule,
    MatSidenavModule,
    AppRoutingModule
    ],
  providers: [
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
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
