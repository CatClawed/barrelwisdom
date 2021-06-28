import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BR1/item/br1-item.module').then(m=>m.BR1ItemModule),
      },
    ]
  },
  {
    path: 'demons',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BR1/demon/br1-demon.module').then(m=>m.BR1DemonModule),
      },
    ]
  },
  {
    path: 'fragment-effects',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BR1/fragment/br1-fragment.module').then(m=>m.BR1FragmentEffectModule),
      },
    ]
  },
  {
    path: 'missions',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BR1/mission/br1-mission.module').then(m=>m.BR1MissionModule),
      },
    ]
  },
  {
    path: 'skills',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/BR1/skill/br1-skill.module').then(m=>m.BR1SkillModule),
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