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
import { A15PropertyRoutingModule } from './a15-property-routing.module';
import { A15PropertyComponent } from './a15-property.component';
import { A15PropertylistComponent } from './a15-propertylist.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      ReactiveFormsModule,
      A15PropertyRoutingModule,
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
        A15PropertylistComponent,
        A15PropertyComponent,
    ]
  })
  export class A15PropertyModule {}