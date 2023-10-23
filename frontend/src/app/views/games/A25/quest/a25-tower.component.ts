import { Location, ViewportScroller } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Tower } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-tower.component.html',
  selector: 'a25-tower',
  providers: [DestroyService]
})
export class A25TowerComponent extends SingleComponent2 implements AfterViewInit {
  tower: Tower[];
  title: string;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private loc: Location,
    private viewportScroller: ViewportScroller,
    protected seoService: SeoService,
    protected a25service: A25Service,) {
    super(destroy$, route, seoService);
    this.tower = this.route.snapshot.data.data
    if (!this.tower) {
      this.error = `404`;
    }
    else {
      this.gameService(this.a25service, 'quests/tower');
      this.title = (this.language == 'en') ? 'Elemental Tower' : "四元の塔";
      this.genericSEO(this.title, `All Elemental Tower floors in ${this.gameTitle}`);
    }
  }

  changeData(): void {
    this.a25service.getTower(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: quest => {
          this.error = ``;
          this.tower = quest;
          this.gameService(this.a25service, 'quests/tower');
          this.title = (this.language == 'en') ? 'Elemental Tower' : "四元の塔";
          this.genericSEO(this.title, `All Elemental Tower floors in ${this.gameTitle}`);
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