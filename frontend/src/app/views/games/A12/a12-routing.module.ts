import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
const routes: Routes = [
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A12/item/a12-itemlist.component').then(m=>m.A12ItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A12/item/a12-itemlist.component').then(m=>m.A12ItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A12/item/a12-item.component').then(m=>m.A12ItemComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'monsters',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A12/monster/a12-monsterlist.component').then(m=>m.A12MonsterlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A12/monster/a12-monsterlist.component').then(m=>m.A12MonsterlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A12/monster/a12-monster.component').then(m=>m.A12MonsterComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'locations',
    children: [
      {
        path: ':subject', 
        loadComponent: ()=> import('@app/views/games/A12/location/a12-location.component').then(m=>m.A12LocationComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A12/location/a12-location.component').then(m=>m.A12LocationComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: '',
        loadComponent: () => import('@app/views/error/error.component').then(m=>m.ErrorComponent)
      }
    ]
  },
  {
    path: 'traits',
    children: [ 
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A12/trait/a12-traitlist.component').then(m=>m.A12TraitlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A12/trait/a12-traitlist.component').then(m=>m.A12TraitlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A12/trait/a12-trait.component').then(m=>m.A12TraitComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'effects',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A12/effect/a12-effectlist.component').then(m=>m.A12EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A12/effect/a12-effectlist.component').then(m=>m.A12EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A12/effect/a12-effect.component').then(m=>m.A12EffectComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: ':subject', 
        loadComponent: ()=> import('@app/views/games/A12/category/a12-category.component').then(m=>m.A12CategoryComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A12/category/a12-category.component').then(m=>m.A12CategoryComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: '',
        loadComponent: () => import('@app/views/error/error.component').then(m=>m.ErrorComponent)
      }
    ]
  },
  {
    path: 'recipe-books',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A12/book/a12-booklist.component').then(m=>m.A12BooklistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A12/book/a12-booklist.component').then(m=>m.A12BooklistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A12/book/a12-book.component').then(m=>m.A12BookComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: '',
    redirectTo: '/totori/faq',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A12RoutingModule {}