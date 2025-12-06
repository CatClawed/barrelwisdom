import { Component, inject } from '@angular/core';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'brsl-unit.component.html',
    selector: 'brsl-unit',
    imports: [...CommonImports]
})
export class BRSLUnitComponent extends SingleComponent {
  protected brslservice = inject(BRSLService);

  changeData() {
    this.gameService(this.brslservice, 'locations');
    this.genericSettings(`Units`, `All crafting units in ${this.gameTitle}.`);
    return this.brslservice.getUnit(this.language);
  }
}