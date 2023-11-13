import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { A23SeedRoutingModule } from './a23-seed-routing.module';
import { A23SeedComponent } from './a23-seed.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
      CommonModule,
      A23SeedRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        A23SeedComponent,
    ]
  })
  export class A23SeedModule {}