import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A15BooklistComponent } from './a15-booklist.component';
import { A15BookComponent } from './a15-book.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A15BooklistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A15BooklistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A15BookComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A15BookRoutingModule {}