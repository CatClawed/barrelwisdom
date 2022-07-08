import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A22TraitlistComponent } from './a22-traitlist.component';
import { A22TraitComponent } from './a22-trait.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A22TraitlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A22TraitlistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A22TraitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A22TraitRoutingModule {}