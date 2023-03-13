import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A18RecipeComponent } from './a18-recipe.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A18RecipeComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A18RecipeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A18RecipeRoutingModule {}