import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A16BooklistComponent } from './a16-booklist.component';
import { A16BookComponent } from './a16-book.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A16BooklistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A16BooklistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A16BookComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A16BookRoutingModule {}