import { Location, ViewportScroller } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { Dungeon } from '../_services/a25.interface';

@Component({
  templateUrl: 'a25-dungeon.component.html',
  styleUrls: ['../resleri.scss'],
  encapsulation: ViewEncapsulation.None,
  selector: 'a25-dungeon',
  providers: [DestroyService]
})
export class A25DungeonComponent extends FragmentedComponent {
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
    this.gameService(this.a25service, 'quests/dungeons');
    this.title = (this.language == 'en') ? 'Dungeons' : "ダンジョン";
    this.genericSEO(this.title, `All dungeons in ${this.gameTitle}`);
    return this.a25service.getDungeons(this.language);
  }
} 