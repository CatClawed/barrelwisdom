import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A15EffectRoutingModule } from './a15-effect-routing.module';
import { A15EffectComponent } from './a15-effect.component';
import { A15EffectlistComponent } from './a15-effectlist.component';

@NgModule({
    imports: [
      SharedModule,
      A15EffectRoutingModule,
      ErrorModule,
    ],
    declarations: [
        A15EffectlistComponent,
        A15EffectComponent,
    ]
  })
  export class A15EffectModule {}