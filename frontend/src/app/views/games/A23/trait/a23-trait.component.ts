import { Component, inject } from '@angular/core';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a23-trait.component.html',
    selector: 'a23-trait',
    imports: [...CommonImports, Popover]
})
export class A23TraitComponent extends SingleComponent {
  protected a23service = inject(A23Service);

  changeData() {
    this.gameService(this.a23service, 'traits');
    return this.a23service.getTrait(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      this.a23service.trait_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}