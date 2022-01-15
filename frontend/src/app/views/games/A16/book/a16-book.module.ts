import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PipeModule } from '@app/pipes/pipes.module';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { A16BookRoutingModule } from './a16-book-routing.module';
import { A16BookComponent } from './a16-book.component';
import { A16BooklistComponent } from './a16-booklist.component';

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      ReactiveFormsModule,
      A16BookRoutingModule,
      PipeModule,
      MatInputModule,
      MatFormFieldModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        A16BooklistComponent,
        A16BookComponent,
    ]
  })
  export class A16BookModule {}