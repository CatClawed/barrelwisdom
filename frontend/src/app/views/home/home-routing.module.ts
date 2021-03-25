import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment, UrlMatchResult } from '@angular/router';

import { HomeComponent } from './home.component';
import { P404Component } from '@app/views/error/404.component';

export function NumberMatcher (url: UrlSegment[]): UrlMatchResult {
  if (url.length == 0) {
    return null;
  }
  const reg = /^\d+$/;
  if (url[0].toString().match(reg)) {
    return ({consumed: url})
  }
}

const routes: Routes = [
  {
    matcher: NumberMatcher,
    component: HomeComponent,
    children: [
      {
        path: '**',
        component: P404Component,
      }
    ]
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}