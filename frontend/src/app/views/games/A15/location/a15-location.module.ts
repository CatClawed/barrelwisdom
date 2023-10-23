import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { A15LocationRoutingModule } from './a15-location-routing.module';
import { A15LocationComponent } from './a15-location.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      A15LocationRoutingModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A15LocationComponent,
    ]
  })
  export class A15LocationModule {}