import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';
import { ErrorComponent } from '@app/views/error/error.component';
import { A23MajorGatherRoutingModule } from './a23-majorgather-routing.module';
import { A23MajorGatherComponent } from './a23-majorgather.component';

@NgModule({
    imports: [
      CommonModule,
      A23MajorGatherRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        A23MajorGatherComponent,
    ]
  })
  export class A23MajorGatherModule {}