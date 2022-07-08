import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { BRSLDemonRoutingModule } from './brsl-demon-routing.module';
import { BRSLDemonComponent } from './brsl-demon.component';
import { BRSLDemonlistComponent } from './brsl-demonlist.component';

@NgModule({
    imports: [
      SharedModule,
      BRSLDemonRoutingModule,
      MatIconModule,
      MatButtonModule,
      ErrorModule,
    ],
    declarations: [
        BRSLDemonlistComponent,
        BRSLDemonComponent,
    ]
  })
  export class BRSLDemonModule {}