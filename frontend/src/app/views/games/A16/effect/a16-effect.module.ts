import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PipeModule } from '@app/pipes/pipes.module';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { A16EffectRoutingModule } from './a16-effect-routing.module';
import { A16EffectComponent } from './a16-effect.component';
import { A16EffectlistComponent } from './a16-effectlist.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      ReactiveFormsModule,
      A16EffectRoutingModule,
      MatInputModule,
      MatFormFieldModule,
      LanguageModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A16EffectlistComponent,
        A16EffectComponent,
    ]
  })
  export class A16EffectModule {}