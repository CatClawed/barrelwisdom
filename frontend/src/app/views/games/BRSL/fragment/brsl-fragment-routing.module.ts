import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BRSLFragmentComponent } from './brsl-fragmentlist.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: BRSLFragmentComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: BRSLFragmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRSLFragmentRoutingModule {}