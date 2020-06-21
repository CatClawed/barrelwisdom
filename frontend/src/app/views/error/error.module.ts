import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ErrorRoutingModule
    ],
    declarations: [
        P404Component,
        P500Component,
    ],
    exports: [
        P404Component,
    ]
  })
  export class ErrorModule { }