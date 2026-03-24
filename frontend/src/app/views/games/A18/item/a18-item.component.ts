import { Component, inject } from '@angular/core';
import { HistoryService } from '@app/services/history.service';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a18-item.component.html',
    selector: 'a18-item',
    styleUrl: '../a18.scss',
    imports: [...CommonImports, Popover]
})
export class A18ItemComponent extends SingleComponent {
  protected a18service = inject(A18Service);
  protected historyService = inject(HistoryService);
  colors = {
    "white": [`fa-empty-circle`, `black`],
    "yellow": [`fa-circle`, `#edc200`],
    "violet": [`fa-circle`, `#ac07bb`],
    "red": [`fa-circle`, `#ae4641`],
    "blue": [`fa-circle`, `#445e7b`],
    "green": [`fa-circle`, `#42b600`],
  }

  changeData() {
    this.gameService(this.a18service, 'items');
    return this.a18service.getItem(this.slug, this.language);
  }

  override afterAssignment(): void {
    let name = (this.language === 'en') ? this.data.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "") : this.data.name;
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSettings(name, this.data.desc[0],
      this.a18service.item_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}