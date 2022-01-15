import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { ErrorModule } from '@app/views/error/error.module';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateRoutingModule,
    ErrorModule,
    MatChipsModule,
    MatAutocompleteModule,
  ],
  declarations: [
    CreateComponent,
  ]
})
export class CreateModule { }