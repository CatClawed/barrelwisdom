import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { A16CategoryRoutingModule } from './a16-category-routing.module';
import { A16CategoryComponent } from './a16-category.component';

@NgModule({
    imports: [
      CommonModule,
      A16CategoryRoutingModule,
      LanguageModule,
      ErrorModule,
    ],
    declarations: [
        A16CategoryComponent,
    ]
  })
  export class A16CategoryModule {}