import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { A12LocationRoutingModule } from './a12-location-routing.module';
import { A12LocationComponent } from './a12-location.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
      CommonModule,
      A12LocationRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        A12LocationComponent,
    ]
  })
  export class A12LocationModule {}