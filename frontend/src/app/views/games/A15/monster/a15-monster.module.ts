import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A15MonsterRoutingModule } from './a15-monster-routing.module';
import { A15MonsterComponent } from './a15-monster.component';
import { A15MonsterlistComponent } from './a15-monsterlist.component';

@NgModule({
    imports: [
      SharedModule,
      A15MonsterRoutingModule,
      MatIconModule,
      MatButtonModule,
      ErrorComponent,
    ],
    declarations: [
        A15MonsterlistComponent,
        A15MonsterComponent,
    ]
  })
  export class A15MonsterModule {}