import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A23LocationComponent } from './a23-location.component';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { A23LocationResolver } from './a23-location.resolve';

const routes: Routes = [
  {
    path: ':location/:language',
    canActivate: [LanguageGuard],
    component: A23LocationComponent,
    resolve: {
      loc: A23LocationResolver
    }
  },
  {
    path: ':location',
    canActivate: [LanguageGuard],
    component: A23LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A23LocationRoutingModule {}