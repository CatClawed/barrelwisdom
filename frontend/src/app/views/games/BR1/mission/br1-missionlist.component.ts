
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '@app/views/games/BR1/_services/br1.interface';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { DestroyService } from '@app/services/destroy.service';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'br1-missionlist.component.html',
  providers: [DestroyService]
})
export class BR1MissionlistComponent extends SingleComponent implements OnInit {
  missions: Mission[];

  constructor(
    protected route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    private br1service: BR1Service,
    public historyService: HistoryService,
    protected seoService: SeoService,
    private viewportScroller: ViewportScroller) {
    super(route, seoService);
    this.gameService(this.br1service, 'mission');
  }
  ngOnInit(): void {
    this.genericSEO(`Missions`, `The full mission list.`);
    this.br1service.getMissionList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: mission => {
          this.error = ``;
          this.missions = mission;
        },
        error: error => {
          this.error = `${error.status}`;

        }
      });
  }
  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first(), takeUntil(this.destroy$)
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }
} 