import { CommonModule } from '@angular/common';
import { NgModule, SecurityContext } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { ErrorModule } from '@app/views/error/error.module';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateRoutingModule,
    ErrorModule,
    MatChipsModule,
    MatAutocompleteModule,
    MarkdownModule.forRoot({sanitize: SecurityContext.NONE}),
  ],
  declarations: [
    CreateComponent,
  ]
})
export class CreateModule { }