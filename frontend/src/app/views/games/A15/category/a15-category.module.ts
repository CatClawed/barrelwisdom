import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { A15CategoryRoutingModule } from './a15-category-routing.module';
import { A15CategoryComponent } from './a15-category.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      A15CategoryRoutingModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A15CategoryComponent,
    ]
  })
  export class A15CategoryModule {}