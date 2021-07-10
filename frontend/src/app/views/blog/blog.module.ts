import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ErrorModule } from '@app/views/error/error.module';
import { NgxCommentoModule } from 'ngx-commento';

@NgModule({
    imports: [
      CommonModule,
      //FormsModule,
      BlogRoutingModule,
      ErrorModule,
      NgxCommentoModule,
    ],
    declarations: [
      BlogComponent,
    ]
  })
  export class BlogModule { }