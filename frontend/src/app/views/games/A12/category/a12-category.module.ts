import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { A12CategoryRoutingModule } from './a12-category-routing.module';
import { A12CategoryComponent } from './a12-category.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      A12CategoryRoutingModule,
            ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A12CategoryComponent,
    ]
  })
  export class A12CategoryModule {}