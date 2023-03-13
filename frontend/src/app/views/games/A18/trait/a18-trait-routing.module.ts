import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A18TraitlistComponent } from './a18-traitlist.component';
import { A18TraitComponent } from './a18-trait.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A18TraitlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A18TraitlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A18TraitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A18TraitRoutingModule {}