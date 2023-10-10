import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_ID, NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { LayoutComponent } from '@app/containers';
import { HttpErrorInterceptor } from '@app/interceptor/http-error.intercepter';
import { JwtInterceptor } from '@app/interceptor/jwt_interceptor';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { CookieService } from 'ngx-cookie-service';

const APP_CONTAINERS = [
  LayoutComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TransferHttpCacheModule,
    MatSidenavModule,
    AppRoutingModule
  ],
  providers: [
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
