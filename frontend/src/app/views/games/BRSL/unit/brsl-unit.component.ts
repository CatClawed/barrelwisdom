import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Unit } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';

@Component({
  templateUrl: 'brsl-unit.component.html',
  selector: 'brsl-unit',
  providers: [DestroyService]
})
export class BRSLUnitComponent extends SingleComponent2 {
  units: Unit[];

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected brslservice: BRSLService) {
    super(destroy$, route, seoService);
  }
  changeData(): void {
    this.language = this.route.snapshot.params.language;
    this.brslservice.getUnit(this.language)
      .subscribe({
        next: unit => {
          this.error = ``;
          this.units = unit;
          this.gameService(this.brslservice, 'locations');
          this.genericSEO(`Units`, `All crafting units in ${this.gameTitle}.`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 