import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { A16CategoryComponent } from './a16-category.component';
import { A16CategoryRoutingModule } from './a16-category-routing.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ErrorModule } from '@app/views/error/error.module';
import {OverlayModule} from '@angular/cdk/overlay'; 


@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      A16CategoryRoutingModule,
      OverlayModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        A16CategoryComponent,
    ]
  })
  export class A16CategoryModule {}