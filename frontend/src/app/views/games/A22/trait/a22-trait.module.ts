import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { A22TraitlistComponent } from './a22-traitlist.component';
import { A22TraitComponent } from './a22-trait.component';
import { A22TraitRoutingModule } from './a22-trait-routing.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ModalsModule } from '@app/containers/modal/modal.module';
import { PipeModule } from '@app/pipes/pipes.module';

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
      A22TraitRoutingModule,
      ModalsModule,
      TooltipModule.forRoot(),
      PipeModule,
      MatInputModule,
      MatFormFieldModule,
      MatChipsModule,
      MatAutocompleteModule,
      OverlayModule,
      MatIconModule,
      MatSelectModule,
      LanguageModule
    ],
    declarations: [
        A22TraitlistComponent,
        A22TraitComponent,
    ],
    exports: [
        A22TraitlistComponent,
        A22TraitComponent
    ],
  })
  export class A22TraitModule {}