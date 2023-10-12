import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorModule } from '@app/views/error/error.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A18ItemRoutingModule } from './a18-item-routing.module';
import { A18ItemComponent } from './a18-item.component';
import { A18ItemlistComponent } from './a18-itemlist.component';

@NgModule({
    imports: [
      SharedModule,
      A18ItemRoutingModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorModule,
      PopoverModule.forRoot(),
    ],
    declarations: [
        A18ItemlistComponent,
        A18ItemComponent,
    ]
  })
  export class A18ItemModule {}