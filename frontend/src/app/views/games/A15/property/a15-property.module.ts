import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { A15PropertyRoutingModule } from './a15-property-routing.module';
import { A15PropertyComponent } from './a15-property.component';
import { A15PropertylistComponent } from './a15-propertylist.component';

@NgModule({
    imports: [
      SharedModule,
      A15PropertyRoutingModule,
      TooltipModule.forRoot(),
      MatIconModule,
      MatSelectModule,
      ErrorModule,
    ],
    declarations: [
        A15PropertylistComponent,
        A15PropertyComponent,
    ]
  })
  export class A15PropertyModule {}