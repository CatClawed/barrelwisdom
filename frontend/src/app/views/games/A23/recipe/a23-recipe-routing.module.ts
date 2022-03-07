import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A23RecipeComponent } from './a23-recipe.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [LanguageGuard],
    component: A23RecipeComponent
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A23RecipeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A23RecipeRoutingModule {}