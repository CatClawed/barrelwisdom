import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: 'properties',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A15/property/a15-propertylist.component').then(m=>m.A15PropertylistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A15/property/a15-propertylist.component').then(m=>m.A15PropertylistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A15/property/a15-property.component').then(m=>m.A15PropertyComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'effects',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A15/effect/a15-effectlist.component').then(m=>m.A15EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A15/effect/a15-effectlist.component').then(m=>m.A15EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A15/effect/a15-effect.component').then(m=>m.A15EffectComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'monsters',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A15/monster/a15-monsterlist.component').then(m=>m.A15MonsterlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A15/monster/a15-monsterlist.component').then(m=>m.A15MonsterlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A15/monster/a15-monster.component').then(m=>m.A15MonsterComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'recipe-books',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A15/book/a15-booklist.component').then(m=>m.A15BooklistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A15/book/a15-booklist.component').then(m=>m.A15BooklistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A15/book/a15-book.component').then(m=>m.A15BookComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A15/item/a15-itemlist.component').then(m=>m.A15ItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A15/item/a15-itemlist.component').then(m=>m.A15ItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A15/item/a15-item.component').then(m=>m.A15ItemComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: ':subject', 
        loadComponent: ()=> import('@app/views/games/A15/category/a15-category.component').then(m=>m.A15CategoryComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A15/category/a15-category.component').then(m=>m.A15CategoryComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: '',
        loadComponent: () => import('@app/views/error/error.component').then(m=>m.ErrorComponent)
      }
    ]
  },
  {
    path: 'locations',
    children: [
      {
        path: ':subject', 
        loadComponent: ()=> import('@app/views/games/A15/location/a15-location.component').then(m=>m.A15LocationComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A15/location/a15-location.component').then(m=>m.A15LocationComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: '',
        loadComponent: () => import('@app/views/error/error.component').then(m=>m.ErrorComponent)
      }
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