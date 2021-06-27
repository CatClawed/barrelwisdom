import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A16LocationComponent } from './a16-location.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: ':location/:language',
    canActivate: [LanguageGuard],
    component: A16LocationComponent
  },
  {
    path: ':location',
    canActivate: [LanguageGuard],
    component: A16LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A16LocationRoutingModule {}