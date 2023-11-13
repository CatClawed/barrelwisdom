import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from '@app/views/error/error.component';
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
      ErrorComponent,
    ],
    declarations: [
        A15ItemlistComponent,
        A15ItemComponent,
    ]
  })
  export class A15ItemModule {}