import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BR1DemonlistComponent } from './br1-demonlist.component';
import { BR1DemonComponent } from './br1-demon.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: BR1DemonlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: BR1DemonlistComponent
  },
  {
    path: ':demon/:language',
    canActivate: [LanguageGuard],
    component: BR1DemonComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BR1DemonRoutingModule {}