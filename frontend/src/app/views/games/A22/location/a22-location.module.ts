import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { A22LocationRoutingModule } from './a22-location-routing.module';
import { A22LocationComponent } from './a22-location.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
      CommonModule,
      A22LocationRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        A22LocationComponent,
    ]
  })
  export class A22LocationModule {}