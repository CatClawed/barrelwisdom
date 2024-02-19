import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/BR1/item/br1-itemlist.component').then(m=>m.BR1ItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/BR1/item/br1-itemlist.component').then(m=>m.BR1ItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/BR1/item/br1-item.component').then(m=>m.BR1ItemComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'demons',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/BR1/demon/br1-demonlist.component').then(m=>m.BR1DemonlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/BR1/demon/br1-demonlist.component').then(m=>m.BR1DemonlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/BR1/demon/br1-demon.component').then(m=>m.BR1DemonComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'fragment-effects',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/BR1/fragment/br1-fragmentlist.component').then(m=>m.BR1FragmentEffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/BR1/fragment/br1-fragmentlist.component').then(m=>m.BR1FragmentEffectlistComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'missions',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/BR1/mission/br1-missionlist.component').then(m=>m.BR1MissionlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/BR1/mission/br1-missionlist.component').then(m=>m.BR1MissionlistComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'skills',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/BR1/skill/br1-skilllist.component').then(m=>m.BR1SkilllistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/BR1/skill/br1-skilllist.component').then(m=>m.BR1SkilllistComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: '',
    redirectTo: '/bluereflection/fragment-episodes',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BR1RoutingModule {}