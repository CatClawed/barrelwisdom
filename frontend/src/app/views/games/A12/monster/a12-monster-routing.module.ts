import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A12MonsterlistComponent } from './a12-monsterlist.component';
import { A12MonsterComponent } from './a12-monster.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A12MonsterlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A12MonsterlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A12MonsterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A12MonsterRoutingModule {}