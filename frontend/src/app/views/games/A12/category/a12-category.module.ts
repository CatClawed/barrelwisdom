import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { A12CategoryRoutingModule } from './a12-category-routing.module';
import { A12CategoryComponent } from './a12-category.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
      CommonModule,
      A12CategoryRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        A12CategoryComponent,
    ]
  })
  export class A12CategoryModule {}