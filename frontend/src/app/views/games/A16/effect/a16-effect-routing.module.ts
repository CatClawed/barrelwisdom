import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A16EffectlistComponent } from './a16-effectlist.component';
import { A16EffectComponent } from './a16-effect.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A16EffectlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A16EffectlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A16EffectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A16EffectRoutingModule {}