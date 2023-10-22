import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { A16CategoryRoutingModule } from './a16-category-routing.module';
import { A16CategoryComponent } from './a16-category.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      A16CategoryRoutingModule,
            ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A16CategoryComponent,
    ]
  })
  export class A16CategoryModule {}