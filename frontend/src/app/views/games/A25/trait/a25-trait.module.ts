import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorModule } from '@app/views/error/error.module';
import { A25CharaModule } from '@app/views/games/A25/character/a25-chara.module';
import { A25ItemModule } from '@app/views/games/A25/item/a25-item.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A25TraitRoutingModule } from './a25-trait-routing.module';
import { A25TraitComponent } from './a25-trait.component';
import { A25TraitlistComponent } from './a25-traitlist.component';

@NgModule({
    imports: [
      SharedModule,
      A25TraitRoutingModule,
      MatIconModule,
      MatSelectModule,
      ErrorModule,
      A25ItemModule,
      A25CharaModule
    ],
    declarations: [
        A25TraitlistComponent,
        A25TraitComponent,
    ]
  })
  export class A25TraitModule {}