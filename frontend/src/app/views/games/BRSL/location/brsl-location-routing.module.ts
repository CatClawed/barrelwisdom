import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { BRSLLocationComponent } from './brsl-location.component';

const routes: Routes = [
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: BRSLLocationComponent,
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