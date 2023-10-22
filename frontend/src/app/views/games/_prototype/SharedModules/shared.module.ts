import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    ModalModule.forRoot(),
  ],
  exports: [
    CommonModule,
    ModalModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
        BreadcrumbModule,
  ]
})
export class SharedModule {}