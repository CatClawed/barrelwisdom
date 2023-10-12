import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { A18CatalystRoutingModule } from './a18-catalyst-routing.module';
import { A18CatalystlistComponent } from './a18-catalystlist.component';

@NgModule({
    imports: [
      SharedModule,
      A18CatalystRoutingModule,
      TooltipModule.forRoot(),
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorModule,
    ],
    declarations: [
        A18CatalystlistComponent,
    ]
  })
  export class A18CatalystModule {}