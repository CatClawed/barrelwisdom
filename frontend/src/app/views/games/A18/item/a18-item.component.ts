import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a18-item.component.html',
  selector: 'a18-item',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, Popover]
})
export class A18ItemComponent extends SingleComponent {
  colors = {
    "white":  [`regular fa-circle`, `black`],
    "yellow": [`solid fa-circle`, `#edc200`],
    "violet": [`solid fa-circle`, `#ac07bb`],
    "red":    [`solid fa-circle`, `#ae4641`],
    "blue":   [`solid fa-circle`, `#445e7b`],
    "green":  [`solid fa-circle`, `#42b600`],
  }

  constructor(
    protected historyService: HistoryService,
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a18service: A18Service) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a18service, 'items');
    return this.a18service.getItem(this.slug, this.language);
  }

  afterAssignment(): void {
    let name = (this.language === 'en') ? this.data.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "") : this.data.name;
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSEO(name, this.data.desc[0]);
  }
} 