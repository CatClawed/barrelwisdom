import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: 'fragments-and-dates',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/BRSL/fragment/brsl-fragmentlist.component').then(m=>m.BRSLFragmentComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/BRSL/fragment/brsl-fragmentlist.component').then(m=>m.BRSLFragmentComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'demons',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/BRSL/demon/brsl-demonlist.component').then(m=>m.BRSLDemonlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/BRSL/demon/brsl-demonlist.component').then(m=>m.BRSLDemonlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/BRSL/demon/brsl-demon.component').then(m=>m.BRSLDemonComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/BRSL/item/brsl-itemlist.component').then(m=>m.BRSLItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/BRSL/item/brsl-itemlist.component').then(m=>m.BRSLItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/BRSL/item/brsl-item.component').then(m=>m.BRSLItemComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'units',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/BRSL/unit/brsl-unit.component').then(m=>m.BRSLUnitComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/BRSL/unit/brsl-unit.component').then(m=>m.BRSLUnitComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'facilities',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/BRSL/facility/brsl-facilitylist.component').then(m=>m.BRSLFacilitylistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/BRSL/facility/brsl-facilitylist.component').then(m=>m.BRSLFacilitylistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: 'sets', 
        loadComponent: ()=> import('@app/views/games/BRSL/facility/brsl-facilityset.component').then(m=>m.BRSLFacilitySetComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: 'sets/:language', 
        loadComponent: ()=> import('@app/views/games/BRSL/facility/brsl-facilityset.component').then(m=>m.BRSLFacilitySetComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/BRSL/facility/brsl-facility.component').then(m=>m.BRSLFacilityComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'skills',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/BRSL/skill/brsl-skill.component').then(m=>m.BRSLSkillComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/BRSL/skill/brsl-skill.component').then(m=>m.BRSLSkillComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'locations',
    children: [
      {
        path: ':subject', 
        loadComponent: ()=> import('@app/views/games/BRSL/location/brsl-location.component').then(m=>m.BRSLLocationComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/BRSL/location/brsl-location.component').then(m=>m.BRSLLocationComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: '',
        loadComponent: () => import('@app/views/_components/error/error.component').then(m=>m.ErrorComponent)
      }
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