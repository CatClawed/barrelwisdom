import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Demon } from '@app/views/games/BR1/_services/br1.interface';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'br1-demon.component.html',
  selector: 'br1-demon',
  providers: [DestroyService]
})
export class BR1DemonComponent extends SingleComponent {
  demon: Demon;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private br1service: BR1Service) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    
    this.br1service.getDemon(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: demon => {
          this.error = ``;
          this.demon = demon;
          this.gameService(this.br1service, 'demons');
          this.genericSEO(this.demon.name, this.demon.flavor);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 