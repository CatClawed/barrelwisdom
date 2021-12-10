import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BRSLDemonlistComponent } from './brsl-demonlist.component';
import { BRSLDemonComponent } from './brsl-demon.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: BRSLDemonlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: BRSLDemonlistComponent
  },
  {
    path: ':demon/:language',
    canActivate: [LanguageGuard],
    component: BRSLDemonComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRSLDemonRoutingModule {}