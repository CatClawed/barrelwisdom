import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { ErrorModule } from '@app/views/error/error.module';
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
      ErrorModule,
    ],
    declarations: [
        A16MonsterlistComponent,
        A16MonsterComponent,
    ]
  })
  export class A16MonsterModule {}