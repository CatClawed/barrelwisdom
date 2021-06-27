import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A16MonsterlistComponent } from './a16-monsterlist.component';
import { A16MonsterComponent } from './a16-monster.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A16MonsterlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A16MonsterlistComponent
  },
  {
    path: ':monster/:language',
    canActivate: [LanguageGuard],
    component: A16MonsterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A16MonsterRoutingModule {}