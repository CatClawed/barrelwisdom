import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { A18CategoryRoutingModule } from './a18-category-routing.module';
import { A18CategoryComponent } from './a18-category.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
      CommonModule,
      A18CategoryRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        A18CategoryComponent,
    ]
  })
  export class A18CategoryModule {}