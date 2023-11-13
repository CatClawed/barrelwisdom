import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { A22ShopDevelopRoutingModule } from './a22-shopdevelop-routing.module';
import { A22ShopDevelopComponent } from './a22-shopdevelop.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
      CommonModule,
      A22ShopDevelopRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        A22ShopDevelopComponent,
    ]
  })
  export class A22ShopDevelopModule {}