import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A23MajorGatherComponent } from './a23-majorgather.component';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { A23MajorGatherResolver } from './a23-majorgather.resolve';

const routes: Routes = [
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A23MajorGatherComponent,
    resolve: {
      gather: A23MajorGatherResolver
    }
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