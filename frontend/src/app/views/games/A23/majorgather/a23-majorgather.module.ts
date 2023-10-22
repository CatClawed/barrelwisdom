import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';
import { ErrorModule } from '@app/views/error/error.module';
import { A23MajorGatherRoutingModule } from './a23-majorgather-routing.module';
import { A23MajorGatherComponent } from './a23-majorgather.component';

@NgModule({
    imports: [
      CommonModule,
      A23MajorGatherRoutingModule,
            ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A23MajorGatherComponent,
    ]
  })
  export class A23MajorGatherModule {}