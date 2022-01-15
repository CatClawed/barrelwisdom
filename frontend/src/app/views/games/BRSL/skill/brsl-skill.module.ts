import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { BRSLSkillRoutingModule } from './brsl-skill-routing.module';
import { BRSLSkillComponent } from './brsl-skill.component';

@NgModule({
    imports: [
      CommonModule,
      BRSLSkillRoutingModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        BRSLSkillComponent,
    ]
  })
  export class BRSLSkillModule {}