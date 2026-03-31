import { Component, inject } from '@angular/core';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
    templateUrl: 'a22-location.component.html',
    styleUrl: '../a22.scss',
    imports: [...CommonImports]
})

export class A22LocationComponent extends FragmentedComponent {
  protected a22service = inject(A22Service);
  dig = true;

  changeData() {
    this.gameService(this.a22service, 'locations');
    return this.a22service.getLocation(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name, `All items in ${this.data.name}`, '', true);
    for (let g of this.data.areas[0].gatherdata) {
      if (g.tool == 'Dig') {
        this.dig = true;
        break;
      }
      this.dig = false;
    }
  }
}