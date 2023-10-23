import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Effect } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a23-effect.component.html',
  selector: 'a23-effect',
  providers: [DestroyService]
})
export class A23EffectComponent extends SingleComponent {
  effect: Effect;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a23service: A23Service) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    this.a23service.getEffect(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: effect => {
          this.error = ``;
          this.effect = effect;
          this.gameService(this.a23service, 'effects');
          this.genericSEO(this.effect.name, this.effect.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 