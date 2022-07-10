import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A15MonsterlistComponent } from './a15-monsterlist.component';
import { A15MonsterComponent } from './a15-monster.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A15MonsterlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A15MonsterlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A15MonsterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A15MonsterRoutingModule {}