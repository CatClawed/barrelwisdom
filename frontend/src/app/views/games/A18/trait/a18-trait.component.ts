import { Component, inject } from '@angular/core';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a18-trait.component.html',
    selector: 'a18-trait',
    imports: [...CommonImports, Popover, ]
})
export class A18TraitComponent extends SingleComponent {
  protected a18service = inject(A18Service);

  changeData() {
    this.gameService(this.a18service, 'traits');
    return this.a18service.getTrait(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      this.a18service.trait_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}