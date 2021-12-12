import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BRSLItemlistComponent } from './brsl-itemlist.component';
import { BRSLItemComponent } from './brsl-item.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: BRSLItemlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: BRSLItemlistComponent
  },
  {
    path: ':item/:language',
    canActivate: [LanguageGuard],
    component: BRSLItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRSLItemRoutingModule {}