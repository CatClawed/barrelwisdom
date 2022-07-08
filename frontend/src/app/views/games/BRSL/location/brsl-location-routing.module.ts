import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BRSLLocationComponent } from './brsl-location.component';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { BRSLLocationResolver } from './brsl-location.resolve';

const routes: Routes = [
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: BRSLLocationComponent,
    resolve: {
      loc: BRSLLocationResolver
    }
  },
  {
    path: ':subject',
    canActivate: [LanguageGuard],
    component: BRSLLocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRSLLocationRoutingModule {}