import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { A16LocationRoutingModule } from './a16-location-routing.module';
import { A16LocationComponent } from './a16-location.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
      CommonModule,
      A16LocationRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        A16LocationComponent,
    ]
  })
  export class A16LocationModule {}