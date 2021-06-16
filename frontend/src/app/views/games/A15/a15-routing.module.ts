import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'properties',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A15/property/a15-property.module').then(m=>m.A15PropertyModule),
      },
    ]
  },
  {
    path: 'effects',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A15/effect/a15-effect.module').then(m=>m.A15EffectModule),
      },
    ]
  },
  {
    path: 'monsters',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A15/monster/a15-monster.module').then(m=>m.A15MonsterModule),
      },
    ]
  },
  {
    path: 'recipe-books',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A15/book/a15-book.module').then(m=>m.A15BookModule),
      },
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A15/item/a15-item.module').then(m=>m.A15ItemModule),
      },
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: '', 
        loadChildren: ()=> import('@app/views/games/A15/category/a15-category.module').then(m=>m.A15CategoryModule),
      },
    ]
  },
  {
    path: '',
    redirectTo: '/escha/faq',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A15RoutingModule {}