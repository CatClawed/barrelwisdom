import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A18MonsterlistComponent } from './a18-monsterlist.component';
import { A18MonsterComponent } from './a18-monster.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A18MonsterlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A18MonsterlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A18MonsterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A18MonsterRoutingModule {}