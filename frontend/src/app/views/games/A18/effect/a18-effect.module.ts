import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from '@app/views/error/error.component';
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
      ErrorComponent,
    ],
    declarations: [
        A18EffectlistComponent,
        A18EffectComponent,
    ]
  })
  export class A18EffectModule {}