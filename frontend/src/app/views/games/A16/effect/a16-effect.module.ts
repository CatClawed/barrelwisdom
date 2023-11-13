import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A16EffectRoutingModule } from './a16-effect-routing.module';
import { A16EffectComponent } from './a16-effect.component';
import { A16EffectlistComponent } from './a16-effectlist.component';

@NgModule({
    imports: [
      SharedModule,
      A16EffectRoutingModule,
      ErrorComponent,
    ],
    declarations: [
        A16EffectlistComponent,
        A16EffectComponent,
    ]
  })
  export class A16EffectModule {}