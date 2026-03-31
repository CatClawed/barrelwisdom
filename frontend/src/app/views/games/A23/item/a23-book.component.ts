import { Component, inject } from '@angular/core';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a23-book.component.html',
    imports: [...CommonImports, ItemComponent]
})
export class A23BookComponent extends SingleComponent {
  protected a23service = inject(A23Service);

  changeData() {
    this.gameService(this.a23service, 'items/books');
    return this.a23service.getBook(this.slug, this.language)
  }

  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}items/${this.data.slug}.webp`
    this.genericSEO(this.data.name, `Recipe book in ${this.gameTitle}`)
    this.breadcrumbService.setBreadcrumbs([[this.gameTitle, `/${this.gameURL}`], [this.a23service.item_translation[this.language], `/${this.gameURL}/items/${this.language}`]], this.data.name)
  }
}