import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A22EffectlistComponent } from './a22-effectlist.component';
import { A22EffectComponent } from './a22-effect.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A22EffectlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A22EffectlistComponent
  },
  {
    path: ':effect/:language',
    canActivate: [LanguageGuard],
    component: A22EffectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A22EffectRoutingModule {}