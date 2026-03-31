import { Component, inject } from '@angular/core';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a12-trait.component.html',
    selector: 'a12-trait',
    imports: [...CommonImports]
})
export class A12TraitComponent extends SingleComponent {
  protected a12service = inject(A12Service);

  changeData() {
    this.gameService(this.a12service, 'traits');
    return this.a12service.getTrait(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      this.a12service.trait_translation[this.language],
      false,
      this.inputSlug ? false : true
    );
  }
}