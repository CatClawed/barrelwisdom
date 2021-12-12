import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { BRSLFacilitylistComponent } from './brsl-facilitylist.component';
import { BRSLFacilityComponent } from './brsl-facility.component';
import { BRSLFacilityRoutingModule } from './brsl-facility-routing.module';
import { LanguageModule } from '@app/views/language/language.module';
import { PipeModule } from '@app/pipes/pipes.module';
import { ErrorModule } from '@app/views/error/error.module';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {OverlayModule} from '@angular/cdk/overlay'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BRSLFacilitySetComponent } from './brsl-facilityset.component';

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      BRSLFacilityRoutingModule,
      TooltipModule.forRoot(),
      PipeModule,
      MatInputModule,
      MatFormFieldModule,
      MatChipsModule,
      MatAutocompleteModule,
      OverlayModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      LanguageModule,
      ErrorModule,
      PopoverModule.forRoot()
    ],
    declarations: [
        BRSLFacilitylistComponent,
        BRSLFacilityComponent,
        BRSLFacilitySetComponent
    ],
    exports: [
        BRSLFacilitylistComponent,
        BRSLFacilityComponent
    ],
  })
  export class BRSLFacilityModule {}