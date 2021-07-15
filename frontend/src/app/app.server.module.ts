import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalRelativeInterceptor } from './interceptor/http.interceptor';
@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UniversalRelativeInterceptor,
    multi: true
  }]
})
export class AppServerModule {}
