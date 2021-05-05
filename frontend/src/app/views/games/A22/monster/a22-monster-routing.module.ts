import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A22MonsterlistComponent } from './a22-monsterlist.component';
import { A22MonsterComponent } from './a22-monster.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A22MonsterlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A22MonsterlistComponent
  },
  {
    path: ':monster/:language',
    canActivate: [LanguageGuard],
    component: A22MonsterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A22MonsterRoutingModule {}