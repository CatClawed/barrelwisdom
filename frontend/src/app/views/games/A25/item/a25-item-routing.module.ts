import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A25MaterialListComponent } from './a25-materiallist.component';
import { A25SynthesisListComponent } from './a25-synthlist.component';
import { A25ItemComponent } from './a25-item.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A25MaterialListComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A25MaterialListComponent
  },
  {
    path: 'materials/:language',
    canActivate: [LanguageGuard],
    component: A25MaterialListComponent
  },
  {
    path: ':itemkind/:subject/:language',
    canActivate: [LanguageGuard],
    component: A25ItemComponent
  },
  {
    path: 'synthesis/:language',
    canActivate: [LanguageGuard],
    component: A25SynthesisListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A25ItemRoutingModule {}