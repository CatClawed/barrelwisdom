import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { BR1ItemRoutingModule } from './br1-item-routing.module';
import { BR1ItemComponent } from './br1-item.component';
import { BR1ItemlistComponent } from './br1-itemlist.component';

@NgModule({
    imports: [
      SharedModule,
      BR1ItemRoutingModule,
      ErrorComponent,
    ],
    declarations: [
        BR1ItemlistComponent,
        BR1ItemComponent,
    ]
  })
  export class BR1ItemModule {}