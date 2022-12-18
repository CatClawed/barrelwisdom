import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { A22ItemRoutingModule } from './a22-item-routing.module';
import { A22ItemComponent } from './a22-item.component';
import { A22ItemlistComponent } from './a22-itemlist.component';

@NgModule({
    imports: [
      SharedModule,
      A22ItemRoutingModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorModule,
      PopoverModule.forRoot(),
    ],
    declarations: [
        A22ItemlistComponent,
        A22ItemComponent,
    ]
  })
  export class A22ItemModule {}