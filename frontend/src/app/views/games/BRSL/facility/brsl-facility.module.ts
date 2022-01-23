import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PipeModule } from '@app/pipes/pipes.module';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BRSLFacilityRoutingModule } from './brsl-facility-routing.module';
import { BRSLFacilityComponent } from './brsl-facility.component';
import { BRSLFacilitylistComponent } from './brsl-facilitylist.component';
import { BRSLFacilitySetComponent } from './brsl-facilityset.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      ReactiveFormsModule,
      BRSLFacilityRoutingModule,
      PipeModule,
      MatInputModule,
      MatFormFieldModule,
      MatIconModule,
      MatButtonModule,
      LanguageModule,
      ErrorModule,
      PopoverModule.forRoot(),
      BreadcrumbModule,
    ],
    declarations: [
        BRSLFacilitylistComponent,
        BRSLFacilityComponent,
        BRSLFacilitySetComponent
    ]
  })
  export class BRSLFacilityModule {}