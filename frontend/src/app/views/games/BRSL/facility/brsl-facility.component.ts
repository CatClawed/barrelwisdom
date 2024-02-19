import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports, PopoverBandaidModule } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'brsl-facility.component.html',
  selector: 'brsl-facility',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, PopoverBandaidModule]
})
export class BRSLFacilityComponent extends SingleComponent {
  expand = false;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected brslservice: BRSLService) {
    super(destroy$, route, seoService);
  }
  changeData() {
    this.gameService(this.brslservice, 'facilities');
    return this.brslservice.getFacility(this.slug, this.language)
  }
  afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`;
    this.genericSEO(this.data.name, this.data.desc);
  }
} 