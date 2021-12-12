import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BRSLSkillComponent } from './brsl-skill.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: BRSLSkillComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: BRSLSkillComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRSLSkillRoutingModule {}