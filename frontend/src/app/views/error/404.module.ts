import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { ErrorRoutingModule } from './error-routing.module'

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ErrorRoutingModule
    ],
    declarations: [
        P404Component,
    ]
  })
  export class P404Module { }