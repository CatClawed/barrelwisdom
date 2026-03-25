import { Component, inject } from '@angular/core';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a15-book.component.html',
    selector: 'a15-book',
    imports: [...CommonImports, ItemComponent]
})
export class A15BookComponent extends SingleComponent {
  protected a15service = inject(A15Service);

  changeData() {
    this.gameService(this.a15service, 'recipe-books');
    return this.a15service.getBook(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}items/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.desc,
      this.a15service.recipebook_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}