import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A18ItemlistComponent } from './a18-itemlist.component';
import { A18ItemComponent } from './a18-item.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A18ItemlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A18ItemlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A18ItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A18ItemRoutingModule {}