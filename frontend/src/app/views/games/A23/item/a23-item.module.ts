import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorModule } from '@app/views/error/error.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A23BookComponent } from './a23-book.component';
import { A23ItemRoutingModule } from './a23-item-routing.module';
import { A23ItemComponent } from './a23-item.component';
import { A23ItemlistComponent } from './a23-itemlist.component';

@NgModule({
    imports: [
      SharedModule,
      A23ItemRoutingModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorModule,
      PopoverModule.forRoot(),
    ],
    declarations: [
        A23ItemlistComponent,
        A23ItemComponent,
        A23BookComponent
    ]
  })
  export class A23ItemModule {}