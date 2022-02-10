import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { A22ItemRoutingModule } from './a22-item-routing.module';
import { A22ItemComponent } from './a22-item.component';
import { A22ItemlistComponent } from './a22-itemlist.component';

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      ReactiveFormsModule,
      A22ItemRoutingModule,
      MatInputModule,
      MatFormFieldModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      LanguageModule,
      ErrorModule,
      PopoverModule.forRoot(),
      BreadcrumbModule,
    ],
    declarations: [
        A22ItemlistComponent,
        A22ItemComponent,
    ]
  })
  export class A22ItemModule {}