import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule, ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CreateComponent } from './create.component';
import { CreateRoutingModule } from './create-routing.module';
import { ErrorModule } from '../error/error.module';


@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      CreateRoutingModule,
      ErrorModule,
      //FormGroup
    ],
    declarations: [
        CreateComponent,
    ],
    exports: [
        CreateComponent,
    ]
  })
  export class CreateModule {}