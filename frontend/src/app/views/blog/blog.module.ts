import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ErrorModule } from '../error/error.module';
import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';
import { P404Component } from '../error/404.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

const componentParsers: Array<HookParserEntry> = [
  {
    component: P404Component,
    enclosing: false  // No need for a closing tag
  }
];

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      BlogRoutingModule,
      ErrorModule,
      DynamicHooksModule.forRoot({
        globalParsers: componentParsers
      })
    ],
    declarations: [
      BlogComponent,
    ]
  })
  export class BlogModule { }