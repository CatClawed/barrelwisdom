import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Effect } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a18-effect.component.html',
  selector: 'a18-effect',
  providers: [DestroyService]
})
export class A18EffectComponent extends SingleComponent2 {
  effect: Effect;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a18service: A18Service) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto "
    this.a18service.getEffect(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: effect => {
          this.error = ``;
          this.effect = effect;
          this.gameService(this.a18service, 'effects');
          this.genericSEO(this.effect.name, this.effect.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 