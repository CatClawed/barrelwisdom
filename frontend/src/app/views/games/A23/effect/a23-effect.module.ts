import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { A23EffectRoutingModule } from './a23-effect-routing.module';
import { A23EffectComponent } from './a23-effect.component';
import { A23EffectlistComponent } from './a23-effectlist.component';

@NgModule({
    imports: [
      SharedModule,
      A23EffectRoutingModule,
      TooltipModule.forRoot(),
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorModule,
    ],
    declarations: [
        A23EffectlistComponent,
        A23EffectComponent,
    ]
  })
  export class A23EffectModule {}