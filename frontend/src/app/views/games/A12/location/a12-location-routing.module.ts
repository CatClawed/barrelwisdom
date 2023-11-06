import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { A12LocationComponent } from './a12-location.component';

const routes: Routes = [
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A12LocationComponent,
  },
  {
    path: ':subject',
    canActivate: [LanguageGuard],
    component: A12LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A12LocationRoutingModule {}