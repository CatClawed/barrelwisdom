import { Component, inject } from '@angular/core';
import { Popover } from '@app/views/_components/popover/popover.component';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'brsl-item.component.html',
    selector: 'brsl-item',
    imports: [...CommonImports, Popover]
})
export class BRSLItemComponent extends SingleComponent {
  protected brslservice = inject(BRSLService);
  expand = false;

  changeData() {
    this.gameService(this.brslservice, 'items');
    return this.brslservice.getItem(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`;
    this.genericSettings(this.data.name, this.data.desc,
      'Items',
      false,
      this.inputSlug ? false : true);
  }
}