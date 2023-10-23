import { Location, ViewportScroller } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ScoreBattle } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-scorebattle.component.html',
  selector: 'a25-scorebattle',
  providers: [DestroyService]
})
export class A25ScoreBattleComponent extends SingleComponent2 implements AfterViewInit {
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
    private loc: Location,
    private viewportScroller: ViewportScroller,
    protected seoService: SeoService,
    protected a25service: A25Service,) {
    super(destroy$, route, seoService);
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

  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first(), takeUntil(this.destroy$)
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }

  scroll(id: string) {
    this.loc.replaceState(`${this.gameURL}/${this.section}/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }

} 