import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A16PropertylistComponent } from './a16-propertylist.component';
import { A16PropertyComponent } from './a16-property.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A16PropertylistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A16PropertylistComponent
  },
  {
    path: ':property/:language',
    canActivate: [LanguageGuard],
    component: A16PropertyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A16PropertyRoutingModule {}