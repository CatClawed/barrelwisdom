import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ItemFull } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-item.component.html',
  selector: 'brsl-item',
  providers: [DestroyService]
})
export class BRSLItemComponent extends SingleComponent2 {
  item: ItemFull;
  expand = false;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected brslservice: BRSLService) {
    super(destroy$, route, seoService);
  }
  changeData(): void {
    this.brslservice.getItem(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          this.gameService(this.brslservice, 'items');
          this.seoImage = `${this.imgURL}${this.section}/${this.item.slug}.webp`;
          this.genericSEO(this.item.name, this.item.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 