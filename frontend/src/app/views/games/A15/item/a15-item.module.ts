import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A15ItemRoutingModule } from './a15-item-routing.module';
import { A15ItemComponent } from './a15-item.component';
import { A15ItemlistComponent } from './a15-itemlist.component';

@NgModule({
    imports: [
      SharedModule,
      A15ItemRoutingModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorModule,
    ],
    declarations: [
        A15ItemlistComponent,
        A15ItemComponent,
    ]
  })
  export class A15ItemModule {}