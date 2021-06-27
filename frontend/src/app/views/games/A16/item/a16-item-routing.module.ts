import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A16ItemlistComponent } from './a16-itemlist.component';
import { A16ItemComponent } from './a16-item.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A16ItemlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A16ItemlistComponent
  },
  {
    path: ':item/:language',
    canActivate: [LanguageGuard],
    component: A16ItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A16ItemRoutingModule {}