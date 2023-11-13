import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A16MonsterRoutingModule } from './a16-monster-routing.module';
import { A16MonsterComponent } from './a16-monster.component';
import { A16MonsterlistComponent } from './a16-monsterlist.component';

@NgModule({
    imports: [
      SharedModule,
      A16MonsterRoutingModule,
      MatIconModule,
      MatButtonModule,
      ErrorComponent,
    ],
    declarations: [
        A16MonsterlistComponent,
        A16MonsterComponent,
    ]
  })
  export class A16MonsterModule {}