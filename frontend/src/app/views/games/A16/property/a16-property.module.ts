import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { A16PropertyRoutingModule } from './a16-property-routing.module';
import { A16PropertyComponent } from './a16-property.component';
import { A16PropertylistComponent } from './a16-propertylist.component';

@NgModule({
    imports: [
      SharedModule,
      A16PropertyRoutingModule,
      TooltipModule.forRoot(),
      MatIconModule,
      MatSelectModule,
      ErrorModule,
    ],
    declarations: [
        A16PropertylistComponent,
        A16PropertyComponent,
    ]
  })
  export class A16PropertyModule {}