import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BR1FragmentEffectlistComponent } from './br1-fragmentlist.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: BR1FragmentEffectlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: BR1FragmentEffectlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BR1FragmentEffectRoutingModule {}