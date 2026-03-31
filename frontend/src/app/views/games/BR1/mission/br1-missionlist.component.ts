
import { Component, inject } from '@angular/core';
import { HistoryService } from '@app/services/history.service';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
    templateUrl: 'br1-missionlist.component.html',
    imports: [...CommonImports]
})
export class BR1MissionlistComponent extends FragmentedComponent {
  protected br1service = inject(BR1Service);
  protected historyService = inject(HistoryService);

  changeData() {
    this.gameService(this.br1service, 'mission');
    this.genericSettings(`Missions`, `The full mission list.`);
    return this.br1service.getMissionList(this.language)
  }
}