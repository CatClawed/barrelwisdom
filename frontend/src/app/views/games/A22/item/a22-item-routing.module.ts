import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A22ItemlistComponent } from './a22-itemlist.component';
import { A22ItemComponent } from './a22-item.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A22ItemlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A22ItemlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A22ItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A22ItemRoutingModule {}