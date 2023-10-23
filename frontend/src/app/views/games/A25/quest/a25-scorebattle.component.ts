import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ScoreBattle } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-scorebattle.component.html',
  selector: 'a25-scorebattle',
  providers: [DestroyService]
})
export class A25ScoreBattleComponent extends FragmentedComponent {
  scorebattles: ScoreBattle[];
  title: string;

  difficulties = {
    1: "Normal",
    2: "Hard",
    3: "Very Hard",
  }

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected loc: Location,
    protected viewportScroller: ViewportScroller,
    protected seoService: SeoService,
    protected a25service: A25Service,) {
    super(destroy$, route, seoService, viewportScroller, loc);
    this.scorebattles = this.route.snapshot.data.data
    if (!this.scorebattles) {
      this.error = `404`;
    }
    else {
      this.gameService(this.a25service, 'quests/scorebattles');
      this.title = (this.language == 'en') ? 'Score Battles' : "スコアバトル";
      this.genericSEO(this.title, `All Score Battles in ${this.gameTitle}`);
    }
  }

  changeData(): void {
    this.a25service.getScoreBattles(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: quest => {
          this.error = ``;
          this.scorebattles = quest;
          this.gameService(this.a25service, 'quests/scorebattles');
          this.title = (this.language == 'en') ? 'Score Battles' : "スコアバトル";
          this.genericSEO(this.title, `All Score Battles in ${this.gameTitle}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 