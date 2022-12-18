import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/_helpers/auth.guard';
import { ModerateComponent } from './moderate.component';

const routes: Routes = [
  
  {
    path: 'comment',
    canActivate: [AuthGuard],
    component: ModerateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModerateRoutingModule {}