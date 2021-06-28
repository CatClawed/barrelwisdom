import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BR1ItemlistComponent } from './br1-itemlist.component';
import { BR1ItemComponent } from './br1-item.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: BR1ItemlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: BR1ItemlistComponent
  },
  {
    path: ':item/:language',
    canActivate: [LanguageGuard],
    component: BR1ItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BR1ItemRoutingModule {}