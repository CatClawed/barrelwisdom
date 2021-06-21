import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { A15LocationComponent } from './a15-location.component';
import { A15LocationRoutingModule } from './a15-location-routing.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ErrorModule } from '@app/views/error/error.module';
import {OverlayModule} from '@angular/cdk/overlay'; 


@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      A15LocationRoutingModule,
      OverlayModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        A15LocationComponent,
    ]
  })
  export class A15LocationModule {}