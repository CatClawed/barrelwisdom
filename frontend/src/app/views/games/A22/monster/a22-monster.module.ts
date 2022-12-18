import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A22MonsterRoutingModule } from './a22-monster-routing.module';
import { A22MonsterComponent } from './a22-monster.component';
import { A22MonsterlistComponent } from './a22-monsterlist.component';

@NgModule({
    imports: [
      SharedModule,
      A22MonsterRoutingModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorModule,
    ],
    declarations: [
        A22MonsterlistComponent,
        A22MonsterComponent,
    ]
  })
  export class A22MonsterModule {}