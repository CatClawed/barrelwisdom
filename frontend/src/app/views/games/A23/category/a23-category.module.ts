import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { A23CategoryRoutingModule } from './a23-category-routing.module';
import { A23CategoryComponent } from './a23-category.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
      CommonModule,
      A23CategoryRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        A23CategoryComponent,
    ]
  })
  export class A23CategoryModule {}