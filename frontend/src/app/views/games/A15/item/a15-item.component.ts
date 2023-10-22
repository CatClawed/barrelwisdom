import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ItemFull } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a15-item.component.html',
  selector: 'a15-item',
  providers: [DestroyService]
})
export class A15ItemComponent extends SingleComponent2 {
  item: ItemFull;
  fire = false;
  water = false;
  wind = false;
  earth = false;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a15service: A15Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    this.a15service.getItem(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          this.gameService(this.a15service, 'items');
          this.seoImage = `${this.imgURL}${this.section}/${this.item.slugname}.webp`
          this.genericSEO(this.item.name, this.item.desc);

          if (this.item.effectline_set) {
            for (let eff of this.item.effectline_set) {
              switch (eff.elem) {
                case "fire":
                  this.fire = true;
                  break;
                case "water":
                  this.water = true;
                  break;
                case "wind":
                  this.wind = true;
                  break;
                case "earth":
                  this.earth = true;
                  break;
              }
            }
          }
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 