import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { BRSLUnitRoutingModule } from './brsl-unit-routing.module';
import { BRSLUnitComponent } from './brsl-unit.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
      CommonModule,
      BRSLUnitRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        BRSLUnitComponent,
    ]
  })
  export class BRSLUnitModule {}