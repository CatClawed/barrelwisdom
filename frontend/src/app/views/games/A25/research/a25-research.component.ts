import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Research } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';


@Component({
  templateUrl: 'a25-research.component.html',
  selector: 'a25-research',
  providers: [DestroyService]
})
export class A25ResearchComponent extends SingleComponent {
  research: Research[];

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected a25service: A25Service) {
    super(destroy$, route, seoService);
  }

  kind = {
    "en": ['Combat Research', 'Alchemy Research'],
    "ja": ['戦闘研究', '錬金研究'],
  }

  changeData(): void {
    
    this.a25service.getResearch(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: research => {
          this.error = ``;
          this.research = research;
          this.gameService(this.a25service, 'research');
          this.genericSEO('Research', `All research in ${this.gameTitle}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

} 