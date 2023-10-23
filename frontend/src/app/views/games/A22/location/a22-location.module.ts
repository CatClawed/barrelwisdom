import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { A22LocationRoutingModule } from './a22-location-routing.module';
import { A22LocationComponent } from './a22-location.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      A22LocationRoutingModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A22LocationComponent,
    ]
  })
  export class A22LocationModule {}