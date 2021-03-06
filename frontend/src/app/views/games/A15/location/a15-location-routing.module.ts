import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A15LocationComponent } from './a15-location.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: ':location/:language',
    canActivate: [LanguageGuard],
    component: A15LocationComponent
  },
  {
    path: ':location',
    canActivate: [LanguageGuard],
    component: A15LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A15LocationRoutingModule {}