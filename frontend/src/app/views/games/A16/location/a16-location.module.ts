import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { A16LocationRoutingModule } from './a16-location-routing.module';
import { A16LocationComponent } from './a16-location.component';

@NgModule({
    imports: [
      CommonModule,
      A16LocationRoutingModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        A16LocationComponent,
    ]
  })
  export class A16LocationModule {}