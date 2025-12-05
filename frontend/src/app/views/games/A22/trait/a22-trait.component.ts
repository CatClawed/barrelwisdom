import { Component, inject } from '@angular/core';
import { Tooltip } from '@app/views/_components/tooltip/tooltip.component';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a22-trait.component.html',
    selector: 'a22-trait',
    imports: [...CommonImports, Tooltip]
})
export class A22TraitComponent extends SingleComponent {
  protected a22service = inject(A22Service);

  changeData() {
    this.gameService(this.a22service, 'traits');
    return this.a22service.getTrait(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      this.a22service.trait_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}