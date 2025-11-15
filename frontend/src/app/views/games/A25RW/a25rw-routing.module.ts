import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: 'traits',
    children: [
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A25RW/trait/a25rw-trait.component').then(m=>m.A25RWTraitComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A25RW/trait/a25rw-traitlist.component').then(m=>m.A25RWTraitlistComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A25RW/trait/a25rw-traitlist.component').then(m=>m.A25RWTraitlistComponent),
        canActivate: [LanguageGuard]
      },
    ]
  },
  {
    path: 'effects',
    children: [
      {
        path: ':subject/:language',
        loadComponent: ()=> import('@app/views/games/A25RW/effect/a25rw-effect.component').then(m=>m.A25RWEffectComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: ':language',
        loadComponent: ()=> import('@app/views/games/A25RW/effect/a25rw-effectlist.component').then(m=>m.A25RWEffectlistComponent),
        canActivate: [LanguageGuard]
      },
      {
        path: '',
        loadComponent: ()=> import('@app/views/games/A25RW/effect/a25rw-effectlist.component').then(m=>m.A25RWEffectlistComponent),
        canActivate: [LanguageGuard]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/resleriana-red-white/items',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class A25RWRoutingModule {}
