import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { BRSLUnitRoutingModule } from './brsl-unit-routing.module';
import { BRSLUnitComponent } from './brsl-unit.component';

@NgModule({
    imports: [
      CommonModule,
      BRSLUnitRoutingModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        BRSLUnitComponent,
    ]
  })
  export class BRSLUnitModule {}