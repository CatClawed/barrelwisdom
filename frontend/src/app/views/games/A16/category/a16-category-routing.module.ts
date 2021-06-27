import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A16CategoryComponent } from './a16-category.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: ':category/:language',
    canActivate: [LanguageGuard],
    component: A16CategoryComponent
  },
  {
    path: ':category',
    canActivate: [LanguageGuard],
    component: A16CategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A16CategoryRoutingModule {}