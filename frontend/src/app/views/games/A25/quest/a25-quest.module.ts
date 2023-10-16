import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A25QuestRoutingModule } from './a25-quest-routing.module';
import { A25QuestComponent } from './a25-quest.component';

@NgModule({
  imports: [
    SharedModule,
    A25QuestRoutingModule,
    ErrorModule,
    MatTabsModule
  ],
  declarations: [
    A25QuestComponent,
  ]
})
export class A25QuestModule { }