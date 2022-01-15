import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PipeModule } from '@app/pipes/pipes.module';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BRSLFragmentRoutingModule } from './brsl-fragment-routing.module';
import { BRSLFragmentComponent } from './brsl-fragmentlist.component';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      BRSLFragmentRoutingModule,
      PipeModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      LanguageModule,
      ErrorModule,
      PopoverModule.forRoot()
    ],
    declarations: [
        BRSLFragmentComponent,
      ],

  })
  export class BRSLFragmentModule {}