import { Component, inject } from '@angular/core';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a25rw-trait.component.html',
    selector: 'a25rw-trait',
    imports: [...CommonImports, Popover]
})
export class A25RWTraitComponent extends SingleComponent {
  protected a25rwservice: A25RWService = inject(A25RWService)

  changeData() {
    this.gameService(this.a25rwservice, 'traits');
    return this.a25rwservice.getTrait(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      this.a25rwservice.trait_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}