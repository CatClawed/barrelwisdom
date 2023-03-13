import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { A18CategoryRoutingModule } from './a18-category-routing.module';
import { A18CategoryComponent } from './a18-category.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      A18CategoryRoutingModule,
      LanguageModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A18CategoryComponent,
    ]
  })
  export class A18CategoryModule {}