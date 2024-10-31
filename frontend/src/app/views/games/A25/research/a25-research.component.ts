import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-research.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [CommonImports, MatTabsModule]
})
export class A25ResearchComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a25service: A25Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  kind = {
    "en": ['Combat Research', 'Alchemy Research'],
    "ja": ['戦闘研究', '錬金研究'],
    "sc": ['战斗研究', '炼金研究'],
    "tc": ['戰鬥研究', '鍊金研究']
  }

  changeData() {
    this.gameService(this.a25service, 'research');
    this.genericSettings('Research', `All research in ${this.gameTitle}`);
    return this.a25service.getResearch(this.language)
  }
} 