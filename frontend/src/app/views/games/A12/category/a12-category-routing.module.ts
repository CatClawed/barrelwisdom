import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A12CategoryComponent } from './a12-category.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A12CategoryComponent
  },
  {
    path: ':subject',
    canActivate: [LanguageGuard],
    component: A12CategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A12CategoryRoutingModule {}