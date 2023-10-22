import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'traits',
    children: [
      {
        path: '', 
        data: {howdy:'hi'},
        loadChildren: ()=> import('@app/views/games/A25/trait/a25-trait.module').then(m=>m.A25TraitModule),
      },
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A25/item/a25-item.module').then(m=>m.A25ItemModule),
      },
    ]
  },
  {
    path: 'characters',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A25/character/a25-chara.module').then(m=>m.A25CharaModule),
      },
    ]
  },
  {
    path: 'memoria',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A25/memoria/a25-memoria.module').then(m=>m.A25MemoriaModule),
      },
    ]
  },
  {
    path: 'research',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A25/research/a25-research.module').then(m=>m.A25ResearchModule),
      },
    ]
  },
  {
    path: 'quests',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A25/quest/a25-quest.module').then(m=>m.A25QuestModule),
      },
    ]
  },
  {
    path: 'home',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A25/update/a25-update.module').then(m=>m.A25UpdateModule),
      },
    ]
  },
  {
    path: '',
    redirectTo: '/resleri/home',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A25RoutingModule {}