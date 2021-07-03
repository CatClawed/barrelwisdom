import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment, UrlMatchResult } from '@angular/router';

import { HomeComponent } from './home.component';

export function NumberMatcher (url: UrlSegment[]): UrlMatchResult {
  if (url.length == 0) {
    return null;
  }
  const reg = /^\d+$/;
  if (`${url[0]}`.match(reg)) {
    return ({consumed: url})
  }
}

const routes: Routes = [
  {
    matcher: NumberMatcher,
    component: HomeComponent,
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