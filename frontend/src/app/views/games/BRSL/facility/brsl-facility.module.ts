import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BRSLFacilityRoutingModule } from './brsl-facility-routing.module';
import { BRSLFacilityComponent } from './brsl-facility.component';
import { BRSLFacilitylistComponent } from './brsl-facilitylist.component';
import { BRSLFacilitySetComponent } from './brsl-facilityset.component';

@NgModule({
    imports: [
      SharedModule,
      BRSLFacilityRoutingModule,
      MatIconModule,
      MatButtonModule,
      ErrorModule,
      PopoverModule.forRoot(),
    ],
    declarations: [
        BRSLFacilitylistComponent,
        BRSLFacilityComponent,
        BRSLFacilitySetComponent
    ]
  })
  export class BRSLFacilityModule {}