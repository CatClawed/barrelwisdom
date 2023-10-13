import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { A25CharaRoutingModule } from './a25-chara-routing.module';
import { A25CharaComponent } from './a25-chara.component';
import { A25CharalistComponent } from './a25-charalist.component';

@NgModule({
    imports: [
      SharedModule,
      A25CharaRoutingModule,
      TooltipModule.forRoot(),
      MatIconModule,
      MatSelectModule,
      ErrorModule,
    ],
    declarations: [
        A25CharalistComponent,
        A25CharaComponent,
    ]
  })
  export class A25CharaModule {}