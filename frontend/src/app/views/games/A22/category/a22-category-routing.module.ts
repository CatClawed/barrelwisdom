import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A22CategoryComponent } from './a22-category.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: ':category/:language',
    canActivate: [LanguageGuard],
    component: A22CategoryComponent
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A22CategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A22CategoryRoutingModule {}