import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BR1MissionlistComponent } from './br1-missionlist.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: BR1MissionlistComponent,
    canActivate: [LanguageGuard]
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: BR1MissionlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BR1MissionRoutingModule {}