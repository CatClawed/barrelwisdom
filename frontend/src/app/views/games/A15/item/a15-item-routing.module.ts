import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A15ItemlistComponent } from './a15-itemlist.component';
import { A15ItemComponent } from './a15-item.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A15ItemlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A15ItemlistComponent
  },
  {
    path: ':item/:language',
    canActivate: [LanguageGuard],
    component: A15ItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A15ItemRoutingModule {}