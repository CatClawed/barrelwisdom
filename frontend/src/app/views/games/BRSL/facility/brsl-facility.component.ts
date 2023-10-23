import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { FacilityFull } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-facility.component.html',
  selector: 'brsl-facility',
  providers: [DestroyService]
})
export class BRSLFacilityComponent extends SingleComponent {
  facility: FacilityFull;
  expand = false;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected brslservice: BRSLService) {
    super(destroy$, route, seoService);
  }
  changeData(): void {
    this.brslservice.getFacility(this.slug, this.language)
    .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: facility => {
          this.error = ``;
          this.facility = facility;
          this.gameService(this.brslservice, 'facilities');
          this.seoImage = `${this.imgURL}${this.section}/${this.facility.slug}.webp`;
          this.genericSEO(this.facility.name, this.facility.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 