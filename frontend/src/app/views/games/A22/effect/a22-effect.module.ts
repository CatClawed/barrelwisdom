import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { A22EffectRoutingModule } from './a22-effect-routing.module';
import { A22EffectComponent } from './a22-effect.component';
import { A22EffectlistComponent } from './a22-effectlist.component';

@NgModule({
    imports: [
      SharedModule,
      A22EffectRoutingModule,
      TooltipModule.forRoot(),
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorModule,
    ],
    declarations: [
        A22EffectlistComponent,
        A22EffectComponent,
    ]
  })
  export class A22EffectModule {}