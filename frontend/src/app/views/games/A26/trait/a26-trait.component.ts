import { Component, inject } from '@angular/core';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { A26MapComponent } from '../map/a26-map.component';

@Component({
    templateUrl: 'a26-trait.component.html',
    selector: 'a26-trait',
    imports: [...CommonImports, Popover, A26MapComponent]
})
export class A26TraitComponent extends SingleComponent {
  protected a26service = inject(A26Service);

  changeData() {
    this.gameService(this.a26service, 'traits');
    return this.a26service.getTrait(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc1,
      this.a26service.trait_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}