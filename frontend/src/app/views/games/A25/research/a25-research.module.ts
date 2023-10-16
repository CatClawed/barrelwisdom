import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A25ResearchRoutingModule } from './a25-research-routing.module';
import { A25ResearchComponent } from './a25-research.component';

@NgModule({
  imports: [
    SharedModule,
    A25ResearchRoutingModule,
    ErrorModule,
    MatTabsModule
  ],
  declarations: [
    A25ResearchComponent,
  ]
})
export class A25ResearchModule { }