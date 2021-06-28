import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BR1SkilllistComponent } from './br1-skilllist.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: BR1SkilllistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: BR1SkilllistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BR1SkillRoutingModule {}