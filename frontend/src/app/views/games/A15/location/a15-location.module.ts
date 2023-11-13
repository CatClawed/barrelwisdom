import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { A15LocationRoutingModule } from './a15-location-routing.module';
import { A15LocationComponent } from './a15-location.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
      CommonModule,
      A15LocationRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        A15LocationComponent,
    ]
  })
  export class A15LocationModule {}