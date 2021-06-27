import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'properties',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A16/property/a16-property.module').then(m=>m.A16PropertyModule),
      },
    ]
  },
  {
    path: 'effects',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A16/effect/a16-effect.module').then(m=>m.A16EffectModule),
      },
    ]
  },
  {
    path: 'monsters',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A16/monster/a16-monster.module').then(m=>m.A16MonsterModule),
      },
    ]
  },
  {
    path: 'recipe-books',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A16/book/a16-book.module').then(m=>m.A16BookModule),
      },
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A16/item/a16-item.module').then(m=>m.A16ItemModule),
      },
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A16/category/a16-category.module').then(m=>m.A16CategoryModule),
      },
    ]
  },
  {
    path: 'locations',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A16/location/a16-location.module').then(m=>m.A16LocationModule),
      },
    ]
  },
  {
    path: '',
    redirectTo: '/shallie/faq',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A16RoutingModule {}