import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'fragments-and-dates',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BRSL/fragment/brsl-fragment.module').then(m=>m.BRSLFragmentModule),
      },
    ]
  },
  {
    path: 'demons',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BRSL/demon/brsl-demon.module').then(m=>m.BRSLDemonModule),
      },
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BRSL/item/brsl-item.module').then(m=>m.BRSLItemModule),
      },
    ]
  },
  {
    path: 'units',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BRSL/unit/brsl-unit.module').then(m=>m.BRSLUnitModule),
      },
    ]
  },
  {
    path: 'facilities',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BRSL/facility/brsl-facility.module').then(m=>m.BRSLFacilityModule),
      },
    ]
  },
  {
    path: 'skills',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BRSL/skill/brsl-skill.module').then(m=>m.BRSLSkillModule),
      },
    ]
  },
  {
    path: 'locations',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BRSL/location/brsl-location.module').then(m=>m.BRSLLocationModule),
      },
    ]
  },
  {
    path: '',
    redirectTo: '/second-light/faq',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BRSLRoutingModule {}