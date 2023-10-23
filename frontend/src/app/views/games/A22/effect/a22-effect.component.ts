import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { EffectFull } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a22-effect.component.html',
  selector: 'a22-effect',
  providers: [DestroyService]
})
export class A22EffectComponent extends SingleComponent {
  effect: EffectFull;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a22service: A22Service) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    
    this.a22service.getEffect(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: effect => {
          if (effect.efftype == "Hidden" || effect.efftype == "unused") {
            this.error = `404`;
          }
          else {
            this.error = ``;
            this.effect = effect;
            this.gameService(this.a22service, 'effects');
            this.genericSEO(this.effect.name, this.effect.desc ? this.effect.desc : `EV Effect in ${this.gameTitle}.`);
          }
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 