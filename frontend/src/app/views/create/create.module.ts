import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule, ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CreateComponent } from './create.component';
import { CreateRoutingModule } from './create-routing.module';
import { ErrorModule } from '../error/error.module';
import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';
import { LoginComponent } from '@app/views/login/login.component';

import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {OverlayModule} from '@angular/cdk/overlay'; 

const componentParsers: Array<HookParserEntry> = [
  {
    component: LoginComponent,
    enclosing: false  // No need for a closing tag
  }
];

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CreateRoutingModule,
    ErrorModule,
    DynamicHooksModule.forRoot({
      globalParsers: componentParsers
    }),
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatAutocompleteModule,
    OverlayModule,
  ],
  declarations: [
    CreateComponent,
  ],
  exports: [
    CreateComponent,
  ]
})
export class CreateModule { }