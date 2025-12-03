import { Component, inject } from '@angular/core';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { A26MapComponent } from '../map/a26-map.component';
import { category_to_icon } from './a26-item-icons';

@Component({
    templateUrl: 'a26-item.component.html',
    selector: 'a26-item',
    styleUrls: ['../yumia.scss'],
    imports: [...CommonImports, Popover, A26MapComponent]
})
export class A26ItemComponent extends SingleComponent {
  category_to_icon = category_to_icon
  protected a26service = inject(A26Service);

  changeData() {
    this.gameService(this.a26service, 'items');
    return this.a26service.getItem(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.seoImage = this.data.cats[0].id != 38 ? `${this.imgURL}${this.section}/${this.data.id}.webp` : '';
    this.genericSettings(this.data.name, this.data.desc ? this.data.desc : this.data.cats[0].name,
      this.a26service.item_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}