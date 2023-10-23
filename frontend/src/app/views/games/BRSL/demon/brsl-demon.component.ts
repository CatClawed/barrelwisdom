import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { DemonFull } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-demon.component.html',
  selector: 'brsl-demon',
  providers: [DestroyService]
})
export class BRSLDemonComponent extends SingleComponent2 {
  demon: DemonFull;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected brslservice: BRSLService) {
    super(destroy$, route, seoService);
  }
  changeData(): void {
    this.brslservice.getDemon(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: demon => {
          this.error = ``;
          this.demon = demon;
          this.gameService(this.brslservice, 'demons');
          this.seoImage = `${this.imgURL}${this.section}/${this.demon.slug}.webp`
          this.genericSEO(this.demon.name, this.demon.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 