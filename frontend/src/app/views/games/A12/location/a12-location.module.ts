import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { A12LocationComponent } from './a12-location.component';
import { A12LocationRoutingModule } from './a12-location-routing.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ErrorModule } from '@app/views/error/error.module';
import {OverlayModule} from '@angular/cdk/overlay'; 


@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      A12LocationRoutingModule,
      OverlayModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        A12LocationComponent,
    ]
  })
  export class A12LocationModule {}