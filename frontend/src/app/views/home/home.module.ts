import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ErrorModule } from '@app/views/error/error.module';
import { PipeModule } from '@app/pipes/pipes.module';

@NgModule({
    imports: [
      CommonModule,
      HomeRoutingModule,
      ErrorModule,
      PipeModule
    ],
    declarations: [
      HomeComponent,
    ]
  })
  export class HomeModule { }