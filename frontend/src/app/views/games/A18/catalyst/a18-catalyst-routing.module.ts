import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A18CatalystlistComponent } from './a18-catalystlist.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A18CatalystlistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A18CatalystlistComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A18CatalystRoutingModule {}