import { Component, inject } from '@angular/core';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';

@Component({
    templateUrl: 'brsl-location.component.html',
    imports: [...CommonImports]
})

export class BRSLLocationComponent extends FragmentedComponent {
  protected brslservice = inject(BRSLService);

  changeData() {
    this.gameService(this.brslservice, `locations`);
    return this.brslservice.getRegion(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name, `All items and demons in ${this.data.name}`, '', true);
  }
}