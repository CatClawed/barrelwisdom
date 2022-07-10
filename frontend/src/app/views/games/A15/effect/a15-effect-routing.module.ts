import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A15EffectlistComponent } from './a15-effectlist.component';
import { A15EffectComponent } from './a15-effect.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A15EffectlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A15EffectlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A15EffectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A15EffectRoutingModule {}