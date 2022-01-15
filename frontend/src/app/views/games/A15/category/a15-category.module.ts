import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { A15CategoryRoutingModule } from './a15-category-routing.module';
import { A15CategoryComponent } from './a15-category.component';

@NgModule({
    imports: [
      CommonModule,
      A15CategoryRoutingModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        A15CategoryComponent,
    ]
  })
  export class A15CategoryModule {}