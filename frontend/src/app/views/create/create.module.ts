import { CommonModule } from '@angular/common';
import { NgModule, SecurityContext } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { ErrorModule } from '@app/views/error/error.module';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateRoutingModule,
    ErrorModule,
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