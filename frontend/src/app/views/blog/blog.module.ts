import { CommonModule } from '@angular/common';
import { NgModule, SecurityContext } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';
import { ErrorModule } from '@app/views/error/error.module';
import { MarkdownModule } from 'ngx-markdown';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
    imports: [
      CommonModule,
      BlogRoutingModule,
      ErrorModule,
      BreadcrumbModule,
      MarkdownModule.forRoot(
        {sanitize: SecurityContext.NONE}
      ),
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
    ],
    declarations: [
      BlogComponent,
    ]
  })
  export class BlogModule { }