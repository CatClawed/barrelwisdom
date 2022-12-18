import { NgModule } from '@angular/core';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { PipeModule } from '@app/pipes/pipes.module';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BRSLFragmentRoutingModule } from './brsl-fragment-routing.module';
import { BRSLFragmentComponent } from './brsl-fragmentlist.component';

@NgModule({
    imports: [
      SharedModule,
      BRSLFragmentRoutingModule,
      PipeModule,
      MatSelectModule,
      ErrorModule,
      PopoverModule.forRoot(),
    ],
    declarations: [
        BRSLFragmentComponent,
      ],

  })
  export class BRSLFragmentModule {}