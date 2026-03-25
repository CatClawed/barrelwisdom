import { Component, inject } from '@angular/core';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a16-book.component.html',
    selector: 'a16-book',
    imports: [...CommonImports, ItemComponent]
})
export class A16BookComponent extends SingleComponent {
  protected a16service = inject(A16Service);

  changeData() {
    this.gameService(this.a16service, 'recipe-books');
    return this.a16service.getBook(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}items/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.desc,
      this.a16service.recipebook_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}