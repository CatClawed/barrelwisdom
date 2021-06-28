import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A12EffectlistComponent } from './a12-effectlist.component';
import { A12EffectComponent } from './a12-effect.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A12EffectlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A12EffectlistComponent
  },
  {
    path: ':effect/:language',
    canActivate: [LanguageGuard],
    component: A12EffectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A12EffectRoutingModule {}