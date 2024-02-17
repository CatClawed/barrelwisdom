import { Location, ViewportScroller } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
  templateUrl: 'a25-tower.component.html',
  styleUrls: ['../resleri.scss'],
  encapsulation: ViewEncapsulation.None,
  selector: 'a25-tower',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
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
    switch(this.language) {
      case "ja": this.title = "四元の塔"; break;
      case "tc": this.title = "四元之塔"; break;
      case "sc": this.title = "四元之塔"; break;
      default: this.title = "Elemental Tower";
    }
    this.genericSEO(this.title, `All Elemental Tower floors in ${this.gameTitle}`);
    return this.a25service.getTower(this.language);
  }
} 