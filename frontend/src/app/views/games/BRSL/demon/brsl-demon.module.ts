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
import { BRSLDemonRoutingModule } from './brsl-demon-routing.module';
import { BRSLDemonComponent } from './brsl-demon.component';
import { BRSLDemonlistComponent } from './brsl-demonlist.component';

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      ReactiveFormsModule,
      BRSLDemonRoutingModule,
      PipeModule,
      MatInputModule,
      MatFormFieldModule,
      MatIconModule,
      MatButtonModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        BRSLDemonlistComponent,
        BRSLDemonComponent,
    ]
  })
  export class BRSLDemonModule {}