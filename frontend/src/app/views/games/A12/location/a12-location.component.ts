import { Component, inject } from '@angular/core';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
    templateUrl: 'a12-location.component.html',
    imports: [...CommonImports]
})
export class A12LocationComponent extends FragmentedComponent {
  protected a12service = inject(A12Service);

  changeData() {
    this.gameService(this.a12service, 'locations');
    return this.a12service.getRegion(this.slug, this.language)
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name, `All items in ${this.data.name}`,
      '',
      true
    );
  }
}