import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PipeModule } from '@app/pipes/pipes.module';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { A16PropertyRoutingModule } from './a16-property-routing.module';
import { A16PropertyComponent } from './a16-property.component';
import { A16PropertylistComponent } from './a16-propertylist.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      ReactiveFormsModule,
      A16PropertyRoutingModule,
      TooltipModule.forRoot(),
      MatInputModule,
      MatFormFieldModule,
      MatIconModule,
      MatSelectModule,
      LanguageModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A16PropertylistComponent,
        A16PropertyComponent,
    ]
  })
  export class A16PropertyModule {}