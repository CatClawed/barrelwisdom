import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { A22ShopDevelopRoutingModule } from './a22-shopdevelop-routing.module';
import { A22ShopDevelopComponent } from './a22-shopdevelop.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      A22ShopDevelopRoutingModule,
      LanguageModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A22ShopDevelopComponent,
    ]
  })
  export class A22ShopDevelopModule {}