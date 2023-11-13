import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';
import { ErrorComponent } from '@app/views/error/error.component';
import { BR1MissionRoutingModule } from './br1-mission-routing.module';
import { BR1MissionlistComponent } from './br1-missionlist.component';

@NgModule({
    imports: [
      CommonModule,
      BR1MissionRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        BR1MissionlistComponent,
    ]
  })
  export class BR1MissionModule {}