import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';
import { ErrorComponent } from '@app/views/error/error.component';
import { BR1SkillRoutingModule } from './br1-skill-routing.module';
import { BR1SkilllistComponent } from './br1-skilllist.component';

@NgModule({
    imports: [
      CommonModule,
      BR1SkillRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        BR1SkilllistComponent,
      ]
  })
  export class BR1SkillModule {}