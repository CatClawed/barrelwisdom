import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A22LocationComponent } from './a22-location.component';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { A22LocationResolver } from './a22-location.resolve';

const routes: Routes = [
  {
    path: ':location/:language',
    canActivate: [LanguageGuard],
    component: A22LocationComponent,
    resolve: {
      loc: A22LocationResolver
    }
  },
  {
    path: ':location',
    canActivate: [LanguageGuard],
    component: A22LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A22LocationRoutingModule {}