import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A23CategoryComponent } from './a23-category.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: ':category/:language',
    canActivate: [LanguageGuard],
    component: A23CategoryComponent
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A23CategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A23CategoryRoutingModule {}