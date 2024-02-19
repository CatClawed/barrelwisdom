import { Location, ViewportScroller } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
  templateUrl: 'a25-dungeon.component.html',
  styleUrls: ['../resleri.scss'],
  encapsulation: ViewEncapsulation.None,
  selector: 'a25-dungeon',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
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
    switch(this.language) {
      case "ja": this.title = "ダンジョン"; break;
      case "tc": this.title = "迷宫"; break;
      case "sc": this.title = "迷宮"; break;
      default: this.title = "Dungeons";
    }
    this.genericSEO(this.title, `All dungeons in ${this.gameTitle}`);
    return this.a25service.getDungeons(this.language);
  }
} 