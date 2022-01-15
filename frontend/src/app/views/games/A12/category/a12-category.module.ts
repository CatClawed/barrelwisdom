import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { A12CategoryRoutingModule } from './a12-category-routing.module';
import { A12CategoryComponent } from './a12-category.component';

@NgModule({
    imports: [
      CommonModule,
      A12CategoryRoutingModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        A12CategoryComponent,
    ]
  })
  export class A12CategoryModule {}