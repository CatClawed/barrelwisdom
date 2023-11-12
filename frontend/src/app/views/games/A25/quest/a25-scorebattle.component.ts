import { Location, ViewportScroller } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
  templateUrl: 'a25-scorebattle.component.html',
  styleUrls: ['../resleri.scss'],
  encapsulation: ViewEncapsulation.None,
  selector: 'a25-scorebattle',
  providers: [DestroyService]
})
export class A25ScoreBattleComponent extends FragmentedComponent {
  title: string;
  difficulties = {
    1: "Normal",
    2: "Hard",
    3: "Very Hard",
  }

  constructor(
    protected route: ActivatedRoute,
    protected loc: Location,
    protected readonly destroy$: DestroyService,
    protected viewportScroller: ViewportScroller,
    protected seoService: SeoService,
    protected a25service: A25Service,) {
    super(destroy$, route, seoService, viewportScroller, loc);
  }

  changeData() {
    this.gameService(this.a25service, 'quests/scorebattles');
    this.title = (this.language == 'en') ? 'Score Battles' : "スコアバトル";
    this.genericSEO(this.title, `All Score Battles in ${this.gameTitle}`);
    return this.a25service.getScoreBattles(this.language);
  }
} 