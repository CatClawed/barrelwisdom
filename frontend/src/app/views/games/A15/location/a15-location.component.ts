import { Component, inject } from '@angular/core';
import { HistoryService } from '@app/services/history.service';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
    templateUrl: 'a15-location.component.html',
    imports: [...CommonImports]
})
export class A15LocationComponent extends FragmentedComponent {
  protected a15service = inject(A15Service);
  protected historyService = inject(HistoryService);

  changeData() {
    this.gameService(this.a15service, 'locations');
    return this.a15service.getRegion(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.genericSettings(this.data.name, `All items in ${this.data.name}`, '', true);
  }
}