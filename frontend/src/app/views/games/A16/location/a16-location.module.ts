import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { A16LocationComponent } from './a16-location.component';
import { A16LocationRoutingModule } from './a16-location-routing.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ErrorModule } from '@app/views/error/error.module';
import {OverlayModule} from '@angular/cdk/overlay'; 


@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      A16LocationRoutingModule,
      OverlayModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        A16LocationComponent,
    ]
  })
  export class A16LocationModule {}