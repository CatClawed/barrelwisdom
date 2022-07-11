import { CommonModule } from '@angular/common';
import { NgModule, SecurityContext } from '@angular/core';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ErrorModule } from '@app/views/error/error.module';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
    imports: [
      CommonModule,
      BlogRoutingModule,
      ErrorModule,
      BreadcrumbModule,
      MarkdownModule.forRoot({sanitize: SecurityContext.NONE}),
    ],
    declarations: [
      BlogComponent,
    ]
  })
  export class BlogModule { }