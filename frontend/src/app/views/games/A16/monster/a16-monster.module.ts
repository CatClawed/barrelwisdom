import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { A16MonsterlistComponent } from './a16-monsterlist.component';
import { A16MonsterComponent } from './a16-monster.component';
import { A16MonsterRoutingModule } from './a16-monster-routing.module';
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
      A16MonsterRoutingModule,
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
        A16MonsterlistComponent,
        A16MonsterComponent,
    ],
    exports: [
        A16MonsterlistComponent,
        A16MonsterComponent
    ],
  })
  export class A16MonsterModule {}