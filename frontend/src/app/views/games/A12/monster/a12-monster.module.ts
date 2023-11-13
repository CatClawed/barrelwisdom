import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A12MonsterRoutingModule } from './a12-monster-routing.module';
import { A12MonsterComponent } from './a12-monster.component';
import { A12MonsterlistComponent } from './a12-monsterlist.component';

@NgModule({
    imports: [
      SharedModule,
      A12MonsterRoutingModule,
      MatIconModule,
      MatButtonModule,
      ErrorComponent,
    ],
    declarations: [
        A12MonsterlistComponent,
        A12MonsterComponent,
    ]
  })
  export class A12MonsterModule {}