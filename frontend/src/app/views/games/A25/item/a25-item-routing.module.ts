import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A25MaterialListComponent } from './a25-materiallist.component';
import { A25SynthesisListComponent } from './a25-synthlist.component';
import { A25ItemComponent } from './a25-item.component';
import { A25RecipeComponent } from './a25-recipe.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: 'materials',
    component: A25MaterialListComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: 'synthesis',
    canActivate: [LanguageGuard],
    component: A25SynthesisListComponent
  },
  {
    path: 'recipes',
    canActivate: [LanguageGuard],
    component: A25RecipeComponent
  },
  {
    path: 'recipes/:language',
    canActivate: [LanguageGuard],
    component: A25RecipeComponent
  },
  {
    path: 'materials/:language',
    canActivate: [LanguageGuard],
    component: A25MaterialListComponent
  },
  {
    path: 'synthesis/:language',
    canActivate: [LanguageGuard],
    component: A25SynthesisListComponent
  },
  {
    path: ':itemkind/:subject',
    canActivate: [LanguageGuard],
    component: A25ItemComponent
  },
  {
    path: ':itemkind/:subject/:language',
    canActivate: [LanguageGuard],
    component: A25ItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A25ItemRoutingModule {}