import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A12TraitlistComponent } from './a12-traitlist.component';
import { A12TraitComponent } from './a12-trait.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A12TraitlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A12TraitlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A12TraitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A12TraitRoutingModule {}