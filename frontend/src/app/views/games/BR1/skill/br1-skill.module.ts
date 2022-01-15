import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { BR1SkillRoutingModule } from './br1-skill-routing.module';
import { BR1SkilllistComponent } from './br1-skilllist.component';

@NgModule({
    imports: [
      CommonModule,
      BR1SkillRoutingModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        BR1SkilllistComponent,
      ]
  })
  export class BR1SkillModule {}