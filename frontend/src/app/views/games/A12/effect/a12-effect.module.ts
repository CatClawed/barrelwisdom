import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A12EffectRoutingModule } from './a12-effect-routing.module';
import { A12EffectComponent } from './a12-effect.component';
import { A12EffectlistComponent } from './a12-effectlist.component';

@NgModule({
    imports: [
      SharedModule,
      A12EffectRoutingModule,
      ErrorModule,
    ],
    declarations: [
        A12EffectlistComponent,
        A12EffectComponent,
    ]
  })
  export class A12EffectModule {}