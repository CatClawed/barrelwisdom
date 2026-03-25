import { Component, inject } from '@angular/core';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a15-item.component.html',
    selector: 'a15-item',
    styleUrl: '../a15.scss',
    imports: [...CommonImports]
})
export class A15ItemComponent extends SingleComponent {
  protected a15service = inject(A15Service);
  fire = false;
  water = false;
  wind = false;
  earth = false;

  changeData() {
    this.gameService(this.a15service, 'items');
    return this.a15service.getItem(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.desc,
      this.a15service.item_translation[this.language],
      false,
      this.inputSlug ? false : true);

    if (this.data.effectline_set) {
      for (let eff of this.data.effectline_set) {
        switch (eff.elem) {
          case "fire":
            this.fire = true;
            break;
          case "water":
            this.water = true;
            break;
          case "wind":
            this.wind = true;
            break;
          case "earth":
            this.earth = true;
            break;
        }
      }
    }
  }
}