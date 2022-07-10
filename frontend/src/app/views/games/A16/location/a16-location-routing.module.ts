import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A16LocationComponent } from './a16-location.component';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { A16LocationResolver } from './a16-location.resolve';

const routes: Routes = [
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A16LocationComponent,
    resolve: {
      loc: A16LocationResolver
    }
  },
  {
    path: ':subject',
    canActivate: [LanguageGuard],
    component: A16LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A16LocationRoutingModule {}