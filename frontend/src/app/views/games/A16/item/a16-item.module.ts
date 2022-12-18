import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A16ItemRoutingModule } from './a16-item-routing.module';
import { A16ItemComponent } from './a16-item.component';
import { A16ItemlistComponent } from './a16-itemlist.component';

@NgModule({
    imports: [
      SharedModule,
      A16ItemRoutingModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorModule,
    ],
    declarations: [
        A16ItemlistComponent,
        A16ItemComponent,
    ]
  })
  export class A16ItemModule {}