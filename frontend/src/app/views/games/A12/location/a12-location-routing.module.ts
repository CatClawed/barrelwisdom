import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A12LocationComponent } from './a12-location.component';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { A12LocationResolver } from './a12-location.resolve';

const routes: Routes = [
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A12LocationComponent,
    resolve: {
      loc: A12LocationResolver
    }
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