import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { A25DungeonComponent } from './a25-dungeon.component';
import { A25ScoreBattleComponent } from './a25-scorebattle.component';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Dungeon, ScoreBattle, Tower } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service'; 
import { A25TowerComponent } from './a25-tower.component';

const dungeonResolver: ResolveFn<Dungeon[]> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(A25Service).getDungeons(route.params.language);
  };

const scoreBattleResolver: ResolveFn<ScoreBattle[]> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(A25Service).getScoreBattles(route.params.language);
  };

const towerResolver: ResolveFn<Tower[]> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(A25Service).getTower(route.params.language);
  };

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
    resolve: {data: dungeonResolver}
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
    resolve: {data: scoreBattleResolver}
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
    resolve: {data: towerResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A25QuestRoutingModule {}