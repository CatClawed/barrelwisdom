import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ErrorModule } from '@app/views/error/error.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
      CommonModule,
      HomeRoutingModule,
      ErrorModule,
      MatPaginatorModule
    ],
    declarations: [
      HomeComponent,
    ]
  })
  export class HomeModule { }