import { Location, ViewportScroller } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
  templateUrl: 'a25-tower.component.html',
  styleUrls: ['../resleri.scss'],
  encapsulation: ViewEncapsulation.None,
  selector: 'a25-tower',
  providers: [DestroyService]
})
export class A25TowerComponent extends FragmentedComponent {
  title: string;

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
    this.gameService(this.a25service, 'quests/tower');
    this.title = (this.language == 'en') ? 'Elemental Tower' : "四元の塔";
    this.genericSEO(this.title, `All Elemental Tower floors in ${this.gameTitle}`);
    return this.a25service.getTower(this.language);
  }
} 