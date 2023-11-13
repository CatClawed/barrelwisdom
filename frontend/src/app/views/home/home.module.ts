import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ErrorComponent } from '@app/views/error/error.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
      CommonModule,
      HomeRoutingModule,
      ErrorComponent,
      MatPaginatorModule
    ],
    declarations: [
      HomeComponent,
    ]
  })
  export class HomeModule { }