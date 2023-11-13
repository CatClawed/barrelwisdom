import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A23MonsterRoutingModule } from './a23-monster-routing.module';
import { A23MonsterComponent } from './a23-monster.component';
import { A23MonsterlistComponent } from './a23-monsterlist.component';

@NgModule({
    imports: [
      SharedModule,
      A23MonsterRoutingModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorComponent,
    ],
    declarations: [
        A23MonsterlistComponent,
        A23MonsterComponent,
    ]
  })
  export class A23MonsterModule {}