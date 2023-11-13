import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { PipeModule } from '@app/pipes/pipes.module';
import { ErrorComponent } from '@app/views/error/error.component';
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
      ErrorComponent,
      PopoverModule.forRoot(),
    ],
    declarations: [
        BRSLFragmentComponent,
      ],

  })
  export class BRSLFragmentModule {}