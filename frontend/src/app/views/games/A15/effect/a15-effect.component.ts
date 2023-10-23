import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Effect } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a15-effect.component.html',
  selector: 'a15-effect',
  providers: [DestroyService]
})
export class A15EffectComponent extends SingleComponent {
  effect: Effect;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a15service: A15Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    
    this.a15service.getEffect(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: effect => {
          this.error = ``;
          this.effect = effect;
          this.gameService(this.a15service, 'effects');
          this.genericSEO(this.effect.name, this.effect.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 