
import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { Mission } from '@app/views/games/BR1/_services/br1.interface';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'br1-missionlist.component.html',
  providers: [DestroyService]
})
export class BR1MissionlistComponent extends FragmentedComponent {
  missions: Mission[];

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private br1service: BR1Service,
    public historyService: HistoryService,
    protected seoService: SeoService,
    protected loc: Location,
    protected viewportScroller: ViewportScroller) {
      super(destroy$, route, seoService, viewportScroller, loc);
  }
  changeData(): void {
    this.br1service.getMissionList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: mission => {
          this.error = ``;
          this.missions = mission;
          this.gameService(this.br1service, 'mission');
          this.genericSEO(`Missions`, `The full mission list.`);
        },
        error: error => {
          this.error = `${error.status}`;

        }
      });
  }
} 