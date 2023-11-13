import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { BRSLSkillRoutingModule } from './brsl-skill-routing.module';
import { BRSLSkillComponent } from './brsl-skill.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
      CommonModule,
      BRSLSkillRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        BRSLSkillComponent,
    ]
  })
  export class BRSLSkillModule {}