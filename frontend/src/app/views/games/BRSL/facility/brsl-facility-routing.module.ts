import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BRSLFacilitylistComponent } from './brsl-facilitylist.component';
import { BRSLFacilityComponent } from './brsl-facility.component';
import { BRSLFacilitySetComponent } from './brsl-facilityset.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: BRSLFacilitylistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: 'sets',
    canActivate: [LanguageGuard],
    component: BRSLFacilitySetComponent
  },
  {
    path: 'sets/:language',
    canActivate: [LanguageGuard],
    component: BRSLFacilitySetComponent
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: BRSLFacilitylistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: BRSLFacilityComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRSLFacilityRoutingModule {}