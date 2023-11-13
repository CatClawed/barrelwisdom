import { CommonModule } from '@angular/common';
import { NgModule, SecurityContext } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { ErrorComponent } from '@app/views/error/error.component';
import { MarkdownModule } from 'ngx-markdown';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateRoutingModule,
    ErrorComponent,
    MatChipsModule,
    MatAutocompleteModule,
    MarkdownModule.forRoot(
      {sanitize: SecurityContext.NONE}
    ),
  ],
  declarations: [
    CreateComponent,
  ]
})
export class CreateModule { }