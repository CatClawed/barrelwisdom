import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a15-item.component.html',
  selector: 'a15-item',
  styleUrls: ['../../_scss/dusk.scss'],
  providers: [DestroyService]
})
export class A15ItemComponent extends SingleComponent {
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

  changeData() {
    this.gameService(this.a15service, 'items');
    return this.a15service.getItem(this.slug, this.language);
  }
  afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slugname}.webp`
    this.genericSEO(this.data.name, this.data.desc);

    if (this.data.effectline_set) {
      for (let eff of this.data.effectline_set) {
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
  }
} 