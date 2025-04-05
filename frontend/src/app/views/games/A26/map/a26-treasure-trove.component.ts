import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { A26MapComponent } from '../map/a26-map.component';

@Component({
    template: `
    @if (data) {
        <h1>{{data.name}} Map</h1>
        <p>A map to ease your suffering. There are 50 Treasure Troves and 50 keys.</p>
        @defer {
          <a26-map [data]="data"></a26-map>
        }
    }
    `,
    providers: [DestroyService],
    imports: [...CommonImports, A26MapComponent]
})

export class A26TreasureTroveComponent extends SingleComponent {

  constructor(
    protected historyService: HistoryService,
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a26service: A26Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  changeData() {
    this.gameService(this.a26service, 'treasure-trove-key-locations');
    return this.a26service.getItem("392", this.language);
  }

  afterAssignment(): void {
    this.genericSettings(`${this.data.name} Map`, "A map to ease your suffering. There are 50 Treasure Troves and 50 keys.");
  }
}