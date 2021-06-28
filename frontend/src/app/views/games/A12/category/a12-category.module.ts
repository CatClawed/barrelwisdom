import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { A12CategoryComponent } from './a12-category.component';
import { A12CategoryRoutingModule } from './a12-category-routing.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ErrorModule } from '@app/views/error/error.module';
import {OverlayModule} from '@angular/cdk/overlay'; 


@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      A12CategoryRoutingModule,
      OverlayModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        A12CategoryComponent,
    ]
  })
  export class A12CategoryModule {}