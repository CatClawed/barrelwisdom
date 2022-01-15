import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { A15LocationRoutingModule } from './a15-location-routing.module';
import { A15LocationComponent } from './a15-location.component';

@NgModule({
    imports: [
      CommonModule,
      A15LocationRoutingModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        A15LocationComponent,
    ]
  })
  export class A15LocationModule {}