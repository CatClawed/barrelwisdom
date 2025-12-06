import { Component, inject } from '@angular/core';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a12-item.component.html',
    selector: 'a12-item',
    imports: [...CommonImports]
})
export class A12ItemComponent extends SingleComponent {
  protected a12service = inject(A12Service);
  itemone: boolean = false;
  itemtwo: boolean = false;
  itemthree: boolean = false;

  changeData() {
    this.gameService(this.a12service, 'items');
    return this.a12service.getItem(this.slug, this.language);
  }
  override afterAssignment(): void {
    if (this.data.effectline_set) {
      for (let effline of this.data.effectline_set) {
        if (effline.itemnum == 1) { this.itemone = true; }
        if (effline.itemnum == 2) { this.itemtwo = true; }
        if (effline.itemnum == 3) { this.itemthree = true; }
      }
    }
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.desc,
      'Items',
      false,
      this.inputSlug ? false : true
    );
  }
}