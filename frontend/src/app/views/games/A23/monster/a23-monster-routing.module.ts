import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A23MonsterlistComponent } from './a23-monsterlist.component';
import { A23MonsterComponent } from './a23-monster.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A23MonsterlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A23MonsterlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A23MonsterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A23MonsterRoutingModule {}