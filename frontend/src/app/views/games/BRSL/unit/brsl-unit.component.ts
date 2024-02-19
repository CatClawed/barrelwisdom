import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'brsl-unit.component.html',
  selector: 'brsl-unit',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class BRSLUnitComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected brslservice: BRSLService) {
    super(destroy$, route, seoService);
  }
  changeData() {
    this.gameService(this.brslservice, 'locations');
    this.genericSEO(`Units`, `All crafting units in ${this.gameTitle}.`);
    return this.brslservice.getUnit(this.language);
  }
} 