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
import { A12TraitRoutingModule } from './a12-trait-routing.module';
import { A12TraitComponent } from './a12-trait.component';
import { A12TraitlistComponent } from './a12-traitlist.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      ReactiveFormsModule,
      A12TraitRoutingModule,
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
        A12TraitlistComponent,
        A12TraitComponent,
    ]
  })
  export class A12TraitModule {}