import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { A12LocationRoutingModule } from './a12-location-routing.module';
import { A12LocationComponent } from './a12-location.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      A12LocationRoutingModule,
            ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A12LocationComponent,
    ]
  })
  export class A12LocationModule {}