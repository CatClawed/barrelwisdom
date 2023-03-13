import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A18MonsterRoutingModule } from './a18-monster-routing.module';
import { A18MonsterComponent } from './a18-monster.component';
import { A18MonsterlistComponent } from './a18-monsterlist.component';

@NgModule({
    imports: [
      SharedModule,
      A18MonsterRoutingModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorModule,
    ],
    declarations: [
        A18MonsterlistComponent,
        A18MonsterComponent,
    ]
  })
  export class A18MonsterModule {}