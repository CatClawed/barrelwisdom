import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment, UrlMatchResult } from '@angular/router';

import { BlogComponent } from './blog.component';
import { P404Component } from '@app/views/error/404.component';

const routes: Routes = [
  {
    path: ':title',
    component: BlogComponent,
    children: [
      {
        path: '**',
        component: P404Component,
      }
    ]
  },
  {
    path: '',
    component: BlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}