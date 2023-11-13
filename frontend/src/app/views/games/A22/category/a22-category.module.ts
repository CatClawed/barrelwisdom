import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { A22CategoryRoutingModule } from './a22-category-routing.module';
import { A22CategoryComponent } from './a22-category.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
      CommonModule,
      A22CategoryRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        A22CategoryComponent,
    ]
  })
  export class A22CategoryModule {}