import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from '@app/views/error/error.component';
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
      ErrorComponent,
    ],
    declarations: [
        A18MonsterlistComponent,
        A18MonsterComponent,
    ]
  })
  export class A18MonsterModule {}