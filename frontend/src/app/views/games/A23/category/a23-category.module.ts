import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { A23CategoryRoutingModule } from './a23-category-routing.module';
import { A23CategoryComponent } from './a23-category.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      A23CategoryRoutingModule,
      LanguageModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A23CategoryComponent,
    ]
  })
  export class A23CategoryModule {}