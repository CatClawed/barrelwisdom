import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A12ItemlistComponent } from './a12-itemlist.component';
import { A12ItemComponent } from './a12-item.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A12ItemlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A12ItemlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A12ItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A12ItemRoutingModule {}