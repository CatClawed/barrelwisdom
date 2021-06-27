import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { A16BooklistComponent } from './a16-booklist.component';
import { A16BookComponent } from './a16-book.component';
import { A16BookRoutingModule } from './a16-book-routing.module';
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

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      A16BookRoutingModule,
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
    ],
    declarations: [
        A16BooklistComponent,
        A16BookComponent,
    ],
    exports: [
        A16BooklistComponent,
        A16BookComponent
    ],
  })
  export class A16BookModule {}