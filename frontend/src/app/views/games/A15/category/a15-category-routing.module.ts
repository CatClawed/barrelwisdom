import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A15CategoryComponent } from './a15-category.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: ':category/:language',
    canActivate: [LanguageGuard],
    component: A15CategoryComponent
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A15CategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A15CategoryRoutingModule {}