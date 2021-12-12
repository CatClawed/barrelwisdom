import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BRSLUnitComponent } from './brsl-unit.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: BRSLUnitComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: BRSLUnitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRSLUnitRoutingModule {}