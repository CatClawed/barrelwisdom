import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      CommonModule,
      RouterModule
    ],
    declarations: [
        BreadcrumbComponent
    ],
    exports: [
        BreadcrumbComponent
    ]
  })
  export class BreadcrumbModule { }