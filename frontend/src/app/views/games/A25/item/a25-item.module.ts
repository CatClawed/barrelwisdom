import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A25ItemRoutingModule } from './a25-item-routing.module';
import { A25ItemComponent } from './a25-item.component';
import { A25MaterialListComponent } from './a25-materiallist.component';
import { A25SynthesisListComponent } from './a25-synthlist.component';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
    imports: [
      SharedModule,
      A25ItemRoutingModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorModule,
      PopoverModule.forRoot(),
    ],
    declarations: [
        A25MaterialListComponent,
        A25ItemComponent,
        A25SynthesisListComponent
    ]
  })
  export class A25ItemModule {}