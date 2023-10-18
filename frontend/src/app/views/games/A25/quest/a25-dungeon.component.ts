import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Dungeon } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-dungeon.component.html',
  selector: 'a25-dungeon',
})
export class A25DungeonComponent extends SingleComponent implements OnInit {
  dungeons: Dungeon[];
  title: string;

  constructor(
    protected route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    private loc: Location,
    private viewportScroller: ViewportScroller,
    protected seoService: SeoService,
    protected a25service: A25Service,) {
    super(route, seoService);
    this.gameService(this.a25service, 'quests/dungeons');
    this.title = (this.language == 'en') ? 'Dungeons' : "ダンジョン";
  }

  ngOnInit(): void {
    this.dungeons = this.route.snapshot.data.data
    if (!this.dungeons) {
      this.error = `404`;
    }
    else {
      this.genericSEO(this.title, `All dungeons in ${this.gameTitle}`);
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