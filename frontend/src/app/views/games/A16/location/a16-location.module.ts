import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { A16LocationRoutingModule } from './a16-location-routing.module';
import { A16LocationComponent } from './a16-location.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      A16LocationRoutingModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A16LocationComponent,
    ]
  })
  export class A16LocationModule {}