import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ErrorModule } from '../error/error.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      BlogRoutingModule,
      ErrorModule
    ],
    declarations: [
      BlogComponent,
    ]
  })
  export class BlogModule { }