import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { A12TraitlistComponent } from './a12-traitlist.component';
import { A12TraitComponent } from './a12-trait.component';
import { A12TraitRoutingModule } from './a12-trait-routing.module';
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

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      A12TraitRoutingModule,
      TooltipModule.forRoot(),
      PipeModule,
      MatInputModule,
      MatFormFieldModule,
      MatChipsModule,
      MatAutocompleteModule,
      OverlayModule,
      MatIconModule,
      MatSelectModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        A12TraitlistComponent,
        A12TraitComponent,
    ],
    exports: [
        A12TraitlistComponent,
        A12TraitComponent
    ],
  })
  export class A12TraitModule {}