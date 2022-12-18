import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { ErrorModule } from '@app/views/error/error.module';
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
      ErrorModule,
    ],
    declarations: [
        A23MonsterlistComponent,
        A23MonsterComponent,
    ]
  })
  export class A23MonsterModule {}