import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { PipeModule } from '@app/pipes/pipes.module';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BRSLItemRoutingModule } from './brsl-item-routing.module';
import { BRSLItemComponent } from './brsl-item.component';
import { BRSLItemlistComponent } from './brsl-itemlist.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      ReactiveFormsModule,
      BRSLItemRoutingModule,
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
        BRSLItemlistComponent,
        BRSLItemComponent,
    ]
  })
  export class BRSLItemModule {}