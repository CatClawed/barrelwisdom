import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { BR1DemonRoutingModule } from './br1-demon-routing.module';
import { BR1DemonComponent } from './br1-demon.component';
import { BR1DemonlistComponent } from './br1-demonlist.component';

@NgModule({
    imports: [
      SharedModule,
      BR1DemonRoutingModule,
      ErrorModule,
    ],
    declarations: [
        BR1DemonlistComponent,
        BR1DemonComponent,
    ]
  })
  export class BR1DemonModule {}