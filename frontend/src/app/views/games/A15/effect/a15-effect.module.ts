import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A15EffectRoutingModule } from './a15-effect-routing.module';
import { A15EffectComponent } from './a15-effect.component';
import { A15EffectlistComponent } from './a15-effectlist.component';

@NgModule({
    imports: [
      SharedModule,
      A15EffectRoutingModule,
      ErrorComponent,
    ],
    declarations: [
        A15EffectlistComponent,
        A15EffectComponent,
    ]
  })
  export class A15EffectModule {}