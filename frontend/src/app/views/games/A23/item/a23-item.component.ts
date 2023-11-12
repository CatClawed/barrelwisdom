import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { EffectData, EffectLine } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a23-item.component.html',
  selector: 'a23-item',
  providers: [DestroyService]
})
export class A23ItemComponent extends SingleComponent {
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

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a23service: A23Service,
    public historyService: HistoryService) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a23service, 'items');
    return this.a23service.getItem(this.slug, this.language);
  }

  afterAssignment(): void {
    let name = (this.language === 'en') ? this.data.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "") : this.data.name;
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSEO(name, this.data.desc1);
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