import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { BRSLUnitRoutingModule } from './brsl-unit-routing.module';
import { BRSLUnitComponent } from './brsl-unit.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      BRSLUnitRoutingModule,
            ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        BRSLUnitComponent,
    ]
  })
  export class BRSLUnitModule {}