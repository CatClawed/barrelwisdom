import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ErrorModule } from '@app/views/error/error.module';
import { GetCeil } from '@app/pipes/ceil.pipe'

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HomeRoutingModule,
      ErrorModule
    ],
    declarations: [
      HomeComponent,
      GetCeil
    ]
  })
  export class HomeModule { }