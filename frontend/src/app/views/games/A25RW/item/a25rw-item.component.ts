import { Component, inject } from '@angular/core';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { A25RWTreeComponent } from './a25rw-tree.component';

@Component({
    templateUrl: 'a25rw-item.component.html',
    selector: 'a25rw-item',
    imports: [...CommonImports, Popover, A25RWTreeComponent]
})
export class A25RWItemComponent extends SingleComponent {
  protected a25rwservice: A25RWService = inject(A25RWService)

  changeData() {
    this.gameService(this.a25rwservice, 'items');
    return this.a25rwservice.getItem(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.id}.webp`;
    this.genericSettings(this.data.name, this.data.desc1 ? this.data.desc1 : '',
      this.a25rwservice.item_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}