import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-research.component.html',
  selector: 'a25-research',
  providers: [DestroyService]
})
export class A25ResearchComponent extends SingleComponent {
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
    "sc": ['战斗研究', '炼金研究'],
    "tc": ['戰鬥研究', '鍊金研究']
  }

  changeData() {
    this.gameService(this.a25service, 'research');
    this.genericSEO('Research', `All research in ${this.gameTitle}`);
    return this.a25service.getResearch(this.language)
  }
} 