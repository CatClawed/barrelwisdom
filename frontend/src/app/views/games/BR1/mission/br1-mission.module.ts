import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { BR1MissionRoutingModule } from './br1-mission-routing.module';
import { BR1MissionlistComponent } from './br1-missionlist.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      BR1MissionRoutingModule,
      LanguageModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        BR1MissionlistComponent,
    ]
  })
  export class BR1MissionModule {}