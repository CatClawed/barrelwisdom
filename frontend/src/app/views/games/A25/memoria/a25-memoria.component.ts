import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Memoria } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-memoria.component.html',
  selector: 'a25-memoria',
  providers: [DestroyService]
})
export class A25MemoriaComponent extends SingleComponent {
  memoria: Memoria;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected a25service: A25Service) {
    super(destroy$, route, seoService);
  }

  rarity = {
    1: "R",
    2: "SR",
    3: "SSR"
  }

  changeData(): void {
    
    this.a25service.getMemoria(this.slug, this.language)
      .subscribe({
        next: memoria => {
          this.memoria = memoria;
          this.gameService(this.a25service, 'memoria');
          this.seoImage = `${this.imgURL}memoria/${this.memoria.slug}.webp`
          this.genericSEO(this.memoria.name, this.memoria.skill_desc.replace('{0}', this.memoria.lv1 + ' ~ ' + this.memoria.lv5));
        }, error: error => {
          this.error = `${error.status}`;
        }
      });
  }

} 