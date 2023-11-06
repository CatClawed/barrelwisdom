import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { A25DungeonComponent } from './a25-dungeon.component';
import { A25ScoreBattleComponent } from './a25-scorebattle.component';
import { A25TowerComponent } from './a25-tower.component';

const routes: Routes = [
  {
    path: 'dungeons',
    canActivate: [LanguageGuard],
    component: A25DungeonComponent,
  },
  {
    path: 'dungeons/:language',
    canActivate: [LanguageGuard],
    component: A25DungeonComponent,
  },
  {
    path: 'scorebattles',
    canActivate: [LanguageGuard],
    component: A25ScoreBattleComponent,
  },
  {
    path: 'scorebattles/:language',
    canActivate: [LanguageGuard],
    component: A25ScoreBattleComponent,
  },
  {
    path: 'tower',
    canActivate: [LanguageGuard],
    component: A25TowerComponent,
  },
  {
    path: 'tower/:language',
    canActivate: [LanguageGuard],
    component: A25TowerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A25QuestRoutingModule {}