import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';
import { ErrorModule } from '@app/views/error/error.module';
import { BR1MissionRoutingModule } from './br1-mission-routing.module';
import { BR1MissionlistComponent } from './br1-missionlist.component';

@NgModule({
    imports: [
      CommonModule,
      BR1MissionRoutingModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        BR1MissionlistComponent,
    ]
  })
  export class BR1MissionModule {}