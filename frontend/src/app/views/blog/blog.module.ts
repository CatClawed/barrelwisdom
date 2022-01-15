import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ErrorModule } from '@app/views/error/error.module';

@NgModule({
    imports: [
      CommonModule,
      BlogRoutingModule,
      ErrorModule,
    ],
    declarations: [
      BlogComponent,
    ]
  })
  export class BlogModule { }