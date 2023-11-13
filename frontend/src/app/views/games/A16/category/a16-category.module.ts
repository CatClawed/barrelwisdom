import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { A16CategoryRoutingModule } from './a16-category-routing.module';
import { A16CategoryComponent } from './a16-category.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
      CommonModule,
      A16CategoryRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        A16CategoryComponent,
    ]
  })
  export class A16CategoryModule {}