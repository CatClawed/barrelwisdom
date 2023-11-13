import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';
import { ErrorComponent } from '@app/views/error/error.component';
import { A23LocationRoutingModule } from './a23-location-routing.module';
import { A23LocationComponent } from './a23-location.component';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
    imports: [
      CommonModule,
      A23LocationRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
      MatInputModule,
      MatFormFieldModule,
      MatIconModule,
      MatSelectModule,
      ReactiveFormsModule,
      PopoverModule.forRoot(),
    ],
    declarations: [
        A23LocationComponent,
    ]
  })
  export class A23LocationModule {}