import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A25QuestRoutingModule } from './a25-quest-routing.module';
import { A25DungeonComponent } from './a25-dungeon.component';
import { A25ScoreBattleComponent } from './a25-scorebattle.component';
import { A25TowerComponent } from './a25-tower.component';

@NgModule({
  imports: [
    SharedModule,
    A25QuestRoutingModule,
    ErrorComponent,
    MatTabsModule
  ],
  declarations: [
    A25DungeonComponent,
    A25ScoreBattleComponent,
    A25TowerComponent,
  ]
})
export class A25QuestModule { }