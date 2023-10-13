import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A25CharalistComponent } from './a25-charalist.component';
import { A25CharaComponent } from './a25-chara.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A25CharalistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A25CharalistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A25CharaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A25CharaRoutingModule {}