import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { A22LocationComponent } from './a22-location.component';
import { A22LocationRoutingModule } from './a22-location-routing.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ErrorModule } from '@app/views/error/error.module';


@NgModule({
    imports: [
      CommonModule,
      A22LocationRoutingModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        A22LocationComponent,
    ],
    exports: [
        A22LocationComponent,
    ],
  })
  export class A22LocationModule {}