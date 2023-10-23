import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Effect } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a12-effect.component.html',
  selector: 'a12-effect',
  providers: [DestroyService]
})
export class A12EffectComponent extends SingleComponent {
  effect: Effect;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a12service: A12Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    
    this.a12service.getEffect(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: effect => {
          this.error = ``;
          this.effect = effect;
          this.gameService(this.a12service, 'effects');
          this.genericSEO(this.effect.name, this.effect.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 