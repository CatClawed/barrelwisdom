import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    BreadcrumbComponent
  ],
  exports: [
    CommonModule,
    ModalModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BreadcrumbComponent,
  ]
})
export class SharedModule {}