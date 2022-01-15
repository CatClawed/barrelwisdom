import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { P404Component } from './404.component';
import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
    imports: [
      CommonModule,
      ErrorRoutingModule
    ],
    declarations: [
        P404Component,
    ],
    exports: [
        P404Component,
    ]
  })
  export class ErrorModule { }