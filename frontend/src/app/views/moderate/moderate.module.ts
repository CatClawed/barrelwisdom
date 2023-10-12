import { CommonModule } from '@angular/common';
import { NgModule, SecurityContext } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';
import { ErrorModule } from '@app/views/error/error.module';
import { MarkdownModule } from 'ngx-markdown';
import { ModerateRoutingModule } from './moderate-routing.module';
import { ModerateComponent } from './moderate.component';

@NgModule({
    imports: [
      CommonModule,
      ModerateRoutingModule,
      ErrorModule,
      BreadcrumbModule,
      MarkdownModule.forRoot({sanitize: SecurityContext.NONE}),
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
    ],
    declarations: [
      ModerateComponent,
    ]
  })
  export class ModerateModule { }