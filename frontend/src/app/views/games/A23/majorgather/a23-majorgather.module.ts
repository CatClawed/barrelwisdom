import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { A23MajorGatherRoutingModule } from './a23-majorgather-routing.module';
import { A23MajorGatherComponent } from './a23-majorgather.component';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
    imports: [
      CommonModule,
      A23MajorGatherRoutingModule,
      LanguageModule,
      ErrorModule,
      BreadcrumbModule,
      MatInputModule,
      MatFormFieldModule,
      MatIconModule,
      MatSelectModule,
      ReactiveFormsModule,
      PopoverModule.forRoot(),
    ],
    declarations: [
        A23MajorGatherComponent,
    ]
  })
  export class A23MajorGatherModule {}