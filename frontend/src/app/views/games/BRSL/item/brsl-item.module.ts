import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BRSLItemRoutingModule } from './brsl-item-routing.module';
import { BRSLItemComponent } from './brsl-item.component';
import { BRSLItemlistComponent } from './brsl-itemlist.component';

@NgModule({
    imports: [
      SharedModule,
      BRSLItemRoutingModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorModule,
      PopoverModule.forRoot(),
    ],
    declarations: [
        BRSLItemlistComponent,
        BRSLItemComponent,
    ]
  })
  export class BRSLItemModule {}