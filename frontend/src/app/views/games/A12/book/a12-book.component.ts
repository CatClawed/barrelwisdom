import { Component, inject } from '@angular/core';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a12-book.component.html',
    selector: 'a12-book',
    imports: [...CommonImports, ItemComponent]
})
export class A12BookComponent extends SingleComponent {
  protected a12service = inject(A12Service);

  changeData() {
    this.gameService(this.a12service, 'recipe-books');
    return this.a12service.getBook(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}items/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.desc,
      'Recipe Books',
      false,
      this.inputSlug ? false : true);
  }
}