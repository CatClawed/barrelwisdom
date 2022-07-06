import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A23EffectlistComponent } from './a23-effectlist.component';
import { A23EffectComponent } from './a23-effect.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A23EffectlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A23EffectlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A23EffectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A23EffectRoutingModule {}