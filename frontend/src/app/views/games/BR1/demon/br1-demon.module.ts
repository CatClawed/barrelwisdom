import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PipeModule } from '@app/pipes/pipes.module';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BR1DemonRoutingModule } from './br1-demon-routing.module';
import { BR1DemonComponent } from './br1-demon.component';
import { BR1DemonlistComponent } from './br1-demonlist.component';

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      ReactiveFormsModule,
      BR1DemonRoutingModule,
      PipeModule,
      MatInputModule,
      MatFormFieldModule,
      MatIconModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        BR1DemonlistComponent,
        BR1DemonComponent,
    ]
  })
  export class BR1DemonModule {}