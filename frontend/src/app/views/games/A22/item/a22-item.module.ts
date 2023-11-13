import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from '@app/views/error/error.component';
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
      ErrorComponent,
      PopoverModule.forRoot(),
    ],
    declarations: [
        A22ItemlistComponent,
        A22ItemComponent,
    ]
  })
  export class A22ItemModule {}