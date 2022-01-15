import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { A12LocationRoutingModule } from './a12-location-routing.module';
import { A12LocationComponent } from './a12-location.component';

@NgModule({
    imports: [
      CommonModule,
      A12LocationRoutingModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        A12LocationComponent,
    ]
  })
  export class A12LocationModule {}