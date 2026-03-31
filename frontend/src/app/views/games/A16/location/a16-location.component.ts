import { Component, inject } from '@angular/core';
import { HistoryService } from '@app/services/history.service';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
    templateUrl: 'a16-location.component.html',
    imports: [...CommonImports]
})
export class A16LocationComponent extends FragmentedComponent {
  protected a16service = inject(A16Service);
  protected historyService = inject(HistoryService);

  changeData() {
    this.gameService(this.a16service, 'locations');
    return this.a16service.getRegion(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.genericSettings(this.data.name, `All items in ${this.data.name}`, '', true);
  }
}