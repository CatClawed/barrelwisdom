import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PipeModule } from '@app/pipes/pipes.module';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { A15BookRoutingModule } from './a15-book-routing.module';
import { A15BookComponent } from './a15-book.component';
import { A15BooklistComponent } from './a15-booklist.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      ReactiveFormsModule,
      A15BookRoutingModule,
      MatInputModule,
      MatFormFieldModule,
      LanguageModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A15BooklistComponent,
        A15BookComponent,
    ]
  })
  export class A15BookModule {}