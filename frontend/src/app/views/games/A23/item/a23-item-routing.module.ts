import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A23ItemlistComponent } from './a23-itemlist.component';
import { A23ItemComponent } from './a23-item.component';
import { A23BookComponent } from './a23-book.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A23ItemlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A23ItemlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A23ItemComponent
  },
  {
    path: 'books/:subject/:language',
    canActivate: [LanguageGuard],
    component: A23BookComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A23ItemRoutingModule {}