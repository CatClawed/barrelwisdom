import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { BRSLLocationRoutingModule } from './brsl-location-routing.module';
import { BRSLLocationComponent } from './brsl-location.component';

@NgModule({
    imports: [
      CommonModule,
      BRSLLocationRoutingModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        BRSLLocationComponent,
    ]
  })
  export class BRSLLocationModule {}