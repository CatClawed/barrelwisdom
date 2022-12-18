import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModerateComponent } from './moderate.component';

const routes: Routes = [
  
  {
    path: 'comment',
    component: ModerateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModerateRoutingModule {}