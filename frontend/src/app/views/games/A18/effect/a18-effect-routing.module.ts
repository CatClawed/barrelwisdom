import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A18EffectlistComponent } from './a18-effectlist.component';
import { A18EffectComponent } from './a18-effect.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A18EffectlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A18EffectlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A18EffectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A18EffectRoutingModule {}