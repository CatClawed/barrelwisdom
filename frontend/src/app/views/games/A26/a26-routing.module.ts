import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/guards/language.guard';

const routes: Routes = [
  {
    path: 'items',
    children: [
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A26/item/a26-item.component').then(m=>m.A26ItemComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A26/item/a26-itemlist.component').then(m=>m.A26ItemlistComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A26/item/a26-itemlist.component').then(m=>m.A26ItemlistComponent),
        canActivate: [LanguageGuard]
      },
    ]
  },
  {
    path: 'traits',
    children: [
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A26/trait/a26-trait.component').then(m=>m.A26TraitComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A26/trait/a26-traitlist.component').then(m=>m.A26TraitlistComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A26/trait/a26-traitlist.component').then(m=>m.A26TraitlistComponent),
        canActivate: [LanguageGuard]
      },
    ]
  },
  {
    path: 'monsters',
    children: [
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A26/monster/a26-monster.component').then(m=>m.A26MonsterComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A26/monster/a26-monsterlist.component').then(m=>m.A26MonsterlistComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A26/monster/a26-monsterlist.component').then(m=>m.A26MonsterlistComponent),
        canActivate: [LanguageGuard]
      },
    ]
  },
  {
    path: 'effects',
    children: [
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A26/effect/a26-effect.component').then(m=>m.A26EffectComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A26/effect/a26-effectlist.component').then(m=>m.A26EffectlistComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A26/effect/a26-effectlist.component').then(m=>m.A26EffectlistComponent),
        canActivate: [LanguageGuard]
      },
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: ':subject',
        loadComponent: ()=> import('@app/views/games/A26/category/a26-category.component').then(m=>m.A26CategoryComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A26/category/a26-category.component').then(m=>m.A26CategoryComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: '',
        loadComponent: () => import('@app/views/_components/error/error.component').then(m=>m.ErrorComponent)
      }
    ]
  },
  {
    path: 'memory-vial-locations',
    children: [
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A26/map/a26-memory-vial.component').then(m=>m.A26MemoryVialComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A26/map/a26-memory-vial.component').then(m=>m.A26MemoryVialComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: 'treasure-trove-key-locations',
    children: [
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A26/map/a26-treasure-trove.component').then(m=>m.A26TreasureTroveComponent),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A26/map/a26-treasure-trove.component').then(m=>m.A26TreasureTroveComponent),
        canActivate: [LanguageGuard],
      },
    ]
  },
  {
    path: '',
    redirectTo: '/yumia/treasure-trove-key-locations',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A26RoutingModule {}
