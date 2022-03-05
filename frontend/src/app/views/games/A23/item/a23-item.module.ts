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
import { A23ItemRoutingModule } from './a23-item-routing.module';
import { A23ItemComponent } from './a23-item.component';
import { A23ItemlistComponent } from './a23-itemlist.component';
import { A23BookComponent } from './a23-book.component';

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      ReactiveFormsModule,
      A23ItemRoutingModule,
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
        A23ItemlistComponent,
        A23ItemComponent,
        A23BookComponent
    ]
  })
  export class A23ItemModule {}