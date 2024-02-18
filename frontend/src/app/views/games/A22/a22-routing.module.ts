import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: 'traits',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A22/trait/a22-traitlist.component').then(m=>m.A22TraitlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A22/trait/a22-traitlist.component').then(m=>m.A22TraitlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A22/trait/a22-trait.component').then(m=>m.A22TraitComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'monsters',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A22/monster/a22-monsterlist.component').then(m=>m.A22MonsterlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A22/monster/a22-monsterlist.component').then(m=>m.A22MonsterlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A22/monster/a22-monster.component').then(m=>m.A22MonsterComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'effects',
    data: { type: "normal" },
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A22/effect/a22-effectlist.component').then(m=>m.A22EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A22/effect/a22-effectlist.component').then(m=>m.A22EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A22/effect/a22-effect.component').then(m=>m.A22EffectComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'forge-effects',
    data: { type: "forge" },
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A22/effect/a22-effectlist.component').then(m=>m.A22EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A22/effect/a22-effectlist.component').then(m=>m.A22EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A22/effect/a22-effect.component').then(m=>m.A22EffectComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'ev-effects',
    data: { type: "ev" },
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A22/effect/a22-effectlist.component').then(m=>m.A22EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A22/effect/a22-effectlist.component').then(m=>m.A22EffectlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A22/effect/a22-effect.component').then(m=>m.A22EffectComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'locations',
    children: [
      {
        path: ':subject', 
        loadComponent: ()=> import('@app/views/games/A22/location/a22-location.component').then(m=>m.A22LocationComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A22/location/a22-location.component').then(m=>m.A22LocationComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: '',
        loadComponent: () => import('@app/views/error/error.component').then(m=>m.ErrorComponent)
      }
    ]
  },
  {
    path: 'items',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A22/item/a22-itemlist.component').then(m=>m.A22ItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A22/item/a22-itemlist.component').then(m=>m.A22ItemlistComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A22/item/a22-item.component').then(m=>m.A22ItemComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'shopdevelop',
    children: [
      {
        path: '', 
        loadComponent: ()=> import('@app/views/games/A22/shopdevelop/a22-shopdevelop.component').then(m=>m.A22ShopDevelopComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language', 
        loadComponent: ()=> import('@app/views/games/A22/shopdevelop/a22-shopdevelop.component').then(m=>m.A22ShopDevelopComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: ':subject', 
        loadComponent: ()=> import('@app/views/games/A22/category/a22-category.component').then(m=>m.A22CategoryComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language', 
        loadComponent: ()=> import('@app/views/games/A22/category/a22-category.component').then(m=>m.A22CategoryComponent),
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
    redirectTo: '/ryza2/faq',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A22RoutingModule {}