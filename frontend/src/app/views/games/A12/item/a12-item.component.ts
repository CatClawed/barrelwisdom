import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ItemFull } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a12-item.component.html',
  selector: 'a12-item',
  providers: [DestroyService]
})
export class A12ItemComponent extends SingleComponent {
  item: ItemFull;
  itemone: boolean = false;
  itemtwo: boolean = false;
  itemthree: boolean = false;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a12service: A12Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    this.a12service.getItem(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: item => {
          this.error = ``;
          this.gameService(this.a12service, 'items');
          this.item = item;
          if (this.item.effectline_set) {
            for (let effline of this.item.effectline_set) {
              if (effline.itemnum == 1) { this.itemone = true; }
              if (effline.itemnum == 2) { this.itemtwo = true; }
              if (effline.itemnum == 3) { this.itemthree = true; }
            }
          }
          this.seoImage = `${this.imgURL}${this.section}/${this.item.slugname}.webp`
          this.genericSEO(this.item.name, this.item.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 