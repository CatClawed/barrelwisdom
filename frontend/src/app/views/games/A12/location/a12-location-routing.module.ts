import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A12LocationComponent } from './a12-location.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: ':location/:language',
    canActivate: [LanguageGuard],
    component: A12LocationComponent
  },
  {
    path: ':location',
    canActivate: [LanguageGuard],
    component: A12LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A12LocationRoutingModule {}