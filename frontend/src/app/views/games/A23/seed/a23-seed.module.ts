import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { A23SeedRoutingModule } from './a23-seed-routing.module';
import { A23SeedComponent } from './a23-seed.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      A23SeedRoutingModule,
            ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A23SeedComponent,
    ]
  })
  export class A23SeedModule {}