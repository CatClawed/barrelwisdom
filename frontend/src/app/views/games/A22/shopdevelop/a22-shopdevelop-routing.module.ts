import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A22ShopDevelopComponent } from './a22-shopdevelop.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A22ShopDevelopComponent
  },
  {
    path: '',
    canActivate: [LanguageGuard],
    component: A22ShopDevelopComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A22ShopDevelopRoutingModule {}