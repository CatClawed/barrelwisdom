import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { BRSLLocationRoutingModule } from './brsl-location-routing.module';
import { BRSLLocationComponent } from './brsl-location.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      BRSLLocationRoutingModule,
      LanguageModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        BRSLLocationComponent,
    ]
  })
  export class BRSLLocationModule {}