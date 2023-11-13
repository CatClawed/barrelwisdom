import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { BRSLLocationRoutingModule } from './brsl-location-routing.module';
import { BRSLLocationComponent } from './brsl-location.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
      CommonModule,
      BRSLLocationRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        BRSLLocationComponent,
    ]
  })
  export class BRSLLocationModule {}