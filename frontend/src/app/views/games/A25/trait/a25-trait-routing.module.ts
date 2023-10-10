import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A25TraitlistComponent } from './a25-traitlist.component';
import { A25TraitComponent } from './a25-trait.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A25TraitlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A25TraitlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A25TraitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A25TraitRoutingModule {}