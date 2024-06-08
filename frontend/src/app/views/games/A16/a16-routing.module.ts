import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: 'properties',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A16/property/a16-propertylist.component').then(m=>m.A16PropertylistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A16/property/a16-propertylist.component').then(m=>m.A16PropertylistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A16/property/a16-property.component').then(m=>m.A16PropertyComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'effects',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A16/effect/a16-effectlist.component').then(m=>m.A16EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A16/effect/a16-effectlist.component').then(m=>m.A16EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A16/effect/a16-effect.component').then(m=>m.A16EffectComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'monsters',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A16/monster/a16-monsterlist.component').then(m=>m.A16MonsterlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A16/monster/a16-monsterlist.component').then(m=>m.A16MonsterlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A16/monster/a16-monster.component').then(m=>m.A16MonsterComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'recipe-books',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A16/book/a16-booklist.component').then(m=>m.A16BooklistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A16/book/a16-booklist.component').then(m=>m.A16BooklistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A16/book/a16-book.component').then(m=>m.A16BookComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A16/item/a16-itemlist.component').then(m=>m.A16ItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A16/item/a16-itemlist.component').then(m=>m.A16ItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A16/item/a16-item.component').then(m=>m.A16ItemComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: ':subject', 
        loadComponent: ()=> import('@app/views/games/A16/category/a16-category.component').then(m=>m.A16CategoryComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A16/category/a16-category.component').then(m=>m.A16CategoryComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: '',
        loadComponent: () => import('@app/views/_components/error/error.component').then(m=>m.ErrorComponent)
      }
    ]
  },
  {
    path: 'locations',
    children: [
      {
        path: ':subject', 
        loadComponent: ()=> import('@app/views/games/A16/location/a16-location.component').then(m=>m.A16LocationComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A16/location/a16-location.component').then(m=>m.A16LocationComponent),
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
    redirectTo: '/shallie/faq',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A16RoutingModule {}