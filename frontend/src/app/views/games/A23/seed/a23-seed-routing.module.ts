import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A23SeedComponent } from './a23-seed.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [LanguageGuard],
    component: A23SeedComponent
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A23SeedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A23SeedRoutingModule {}