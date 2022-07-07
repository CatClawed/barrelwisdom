import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A23TraitlistComponent } from './a23-traitlist.component';
import { A23TraitComponent } from './a23-trait.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A23TraitlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A23TraitlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A23TraitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A23TraitRoutingModule {}