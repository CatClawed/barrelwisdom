import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/_helpers/auth.guard';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}