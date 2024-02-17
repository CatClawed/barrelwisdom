import { Location, ViewportScroller } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
  templateUrl: 'a25-scorebattle.component.html',
  styleUrls: ['../resleri.scss'],
  encapsulation: ViewEncapsulation.None,
  selector: 'a25-scorebattle',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
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
    switch(this.language) {
      case "ja": this.title = "スコアバトル"; break;
      case "tc": this.title = "积分战斗蟩"; break;
      case "sc": this.title = "積分戰蟩"; break;
      default: this.title = "Score Battles";
    }
    this.genericSEO(this.title, `All Score Battles in ${this.gameTitle}`);
    return this.a25service.getScoreBattles(this.language);
  }
} 