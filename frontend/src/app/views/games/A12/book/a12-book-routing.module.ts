import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A12BooklistComponent } from './a12-booklist.component';
import { A12BookComponent } from './a12-book.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A12BooklistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A12BooklistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A12BookComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A12BookRoutingModule {}