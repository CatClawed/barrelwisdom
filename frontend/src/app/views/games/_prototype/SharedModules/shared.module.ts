import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';
import { ErrorComponent } from '@app/views/error/error.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    BreadcrumbComponent,
    ErrorComponent,
    ModalModule.forRoot()
  ],
  exports: [
    CommonModule,
    ModalModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BreadcrumbComponent,
    ErrorComponent
  ]
})
export class SharedModule {}