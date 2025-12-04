import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HistoryService } from '@app/services/history.service';
import { Popover } from '@app/views/_components/popover/popover.component';
import { EffectData, EffectLine } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { itemkinds } from '@app/views/games/A23/a23-map-svg';

@Component({
    templateUrl: 'a23-item.component.html',
    selector: 'a23-item',
    styleUrl: '../a23.scss',
    imports: [...CommonImports, Popover, NgTemplateOutlet]
})
export class A23ItemComponent extends SingleComponent {
  protected a23service = inject(A23Service);
  protected historyService = inject(HistoryService);
  itemkinds = itemkinds;
  colors = {
    1: "39b4f6",
    2: "34d80d",
    3: "f7e331",
    4: "ff8242",
    5: "debee3"
  }
  icons = {
    1: "ice",
    2: "wind",
    3: "lightning",
    4: "fire",
    5: "light"
  }

  changeData() {
    this.gameService(this.a23service, 'items');
    return this.a23service.getItem(this.slug, this.language);
  }

  override afterAssignment(): void {
    let name = (this.language === 'en') ? this.data.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "") : this.data.name;
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSettings(name, this.data.desc1,
      this.a23service.item_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }

  checkLevel(maxLv, restrict, effectLine: EffectLine, effectData: EffectData) {
    if (restrict !== null) {
      if (effectLine.data.indexOf(effectData) >= restrict) return 2;
    }
    if (!maxLv) {
      return 0;
    }
    if (effectData.num >= maxLv) {
      return 1;
    }
    return 0;
  }
}