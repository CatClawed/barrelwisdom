import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { A18EffectRoutingModule } from './a18-effect-routing.module';
import { A18EffectComponent } from './a18-effect.component';
import { A18EffectlistComponent } from './a18-effectlist.component';

@NgModule({
    imports: [
      SharedModule,
      A18EffectRoutingModule,
      TooltipModule.forRoot(),
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorModule,
    ],
    declarations: [
        A18EffectlistComponent,
        A18EffectComponent,
    ]
  })
  export class A18EffectModule {}