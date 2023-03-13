import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A18ShopComponent } from './a18-shop.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A18ShopComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A18ShopComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A18ShopRoutingModule {}