import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { A23MajorGatherComponent } from './a23-majorgather.component';

const routes: Routes = [
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A23MajorGatherComponent,
  },
  {
    path: '',
    canActivate: [LanguageGuard],
    component: A23MajorGatherComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A23MajorGatherRoutingModule {}