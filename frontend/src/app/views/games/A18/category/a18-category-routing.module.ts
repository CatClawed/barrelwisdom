import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A18CategoryComponent } from './a18-category.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A18CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A18CategoryRoutingModule {}