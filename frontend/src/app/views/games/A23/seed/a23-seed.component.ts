import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Seed } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-seed.component.html',
  providers: [DestroyService]
})
export class A23SeedComponent extends SingleComponent {
  seeds: Seed[];

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a23service: A23Service) {
    super(destroy$, route, seoService);
  }
  changeData(): void {
    this.a23service.getSeeds(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: seed => {
          this.error = ``;
          this.seeds = seed;
          this.gameService(this.a23service, 'seeds');
          this.genericSEO(`Seeds`, `About growing seeds, and the list of items you can get.`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 