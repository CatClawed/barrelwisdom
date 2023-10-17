import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ScoreBattle } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-scorebattle.component.html',
  selector: 'a25-scorebattle',
})
export class A25ScoreBattleComponent extends SingleComponent implements OnInit {
  scorebattles: ScoreBattle[];
  title: string;

  difficulties = {
    1: "Normal",
    2: "Hard",
    3: "Very Hard",
  }

  constructor(
    protected route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    private loc: Location,
    private viewportScroller: ViewportScroller,
    protected seoService: SeoService,
    protected a25service: A25Service,) {
    super(route, seoService);
    this.gameService(this.a25service, 'quests/scorebattles');
    this.title = (this.language == 'en') ? 'Score Battles' : "スコアバトル";
  }

  ngOnInit(): void {
    this.scorebattles = this.route.snapshot.data.data
    if (!this.scorebattles) {
      this.error = `404`;
    }
    else {
      this.genericSEO(this.title, `All Score Battles in ${this.a25service.gameTitle}`);
    }
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