import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A15PropertylistComponent } from './a15-propertylist.component';
import { A15PropertyComponent } from './a15-property.component';
import { LanguageGuard } from '@app/_helpers/language.guard';

const routes: Routes = [
  {
    path: '',
    component: A15PropertylistComponent,
    canActivate: [LanguageGuard],
  },
  {
    path: ':language',
    canActivate: [LanguageGuard],
    component: A15PropertylistComponent
  },
  {
    path: ':subject/:language',
    canActivate: [LanguageGuard],
    component: A15PropertyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A15PropertyRoutingModule {}