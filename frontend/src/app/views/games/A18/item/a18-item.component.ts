import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { Item } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a18-item.component.html',
  selector: 'a18-item',
  providers: [DestroyService]
})
export class A18ItemComponent extends SingleComponent2 {

  item: Item;
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

  changeData(): void {
    this.a18service.getItem(this.slug, this.language)
    .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          this.gameService(this.a18service, 'items');
          let name = (this.language === 'en') ? this.item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "") : this.item.name;
          this.seoImage = `${this.imgURL}${this.section}/${this.item.slug}.webp`
          this.genericSEO(name, this.item.desc[0]);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 