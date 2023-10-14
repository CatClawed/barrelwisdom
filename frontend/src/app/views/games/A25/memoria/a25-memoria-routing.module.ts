import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@app/_helpers/language.guard';
import { A25MemoriaComponent } from './a25-memoria.component';
import { A25MemorialistComponent } from './a25-memorialist.component';

const routes: Routes = [
  {
    path: '',
    component: A25MemorialistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A25MemorialistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A25MemoriaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A25MemoriaRoutingModule {}