import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { A25QuestComponent } from './a25-quest.component';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Dungeon } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service'; 

const dungeonResolver: ResolveFn<Dungeon[]> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(A25Service).getDungeons(route.params.language);
  };

const routes: Routes = [
  {
    path: 'dungeons/:language',
    canActivate: [LanguageGuard],
    component: A25QuestComponent,
    resolve: {data: dungeonResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A25QuestRoutingModule {}