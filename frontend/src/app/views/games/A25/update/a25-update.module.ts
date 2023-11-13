import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A25UpdateRoutingModule } from './a25-update-routing.module';
import { A25UpdateComponent } from './a25-update.component';

@NgModule({
  imports: [
    SharedModule,
    A25UpdateRoutingModule,
    ErrorComponent,
  ],
  declarations: [
    A25UpdateComponent,
  ]
})
export class A25UpdateModule { }