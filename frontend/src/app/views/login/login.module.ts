import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule, ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginComponent } from './login.component';


@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      //FormGroup
    ],
    declarations: [
      LoginComponent,
    ],
    exports: [
      LoginComponent,
    ]
  })
  export class LoginModule {}