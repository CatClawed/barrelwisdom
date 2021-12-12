import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BRSLLocationComponent } from './brsl-location.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: ':location/:language',
    canActivate: [LanguageGuard],
    component: BRSLLocationComponent
  },
  {
    path: ':location',
    canActivate: [LanguageGuard],
    component: BRSLLocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRSLLocationRoutingModule {}