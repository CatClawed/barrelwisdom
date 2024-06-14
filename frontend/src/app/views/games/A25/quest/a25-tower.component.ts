import { Location, ViewportScroller } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { Hint } from '@app/views/games/A25/_services/a25.interface';
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
  translations = {
    'elemental-tower': {
      'ja': "四元の塔",
      'tc': "四元之塔",
      'sc': "四元之塔",
      'en': "Elemental Tower"
    },
    'fire': {
      'ja': "火の塔",
      'tc': "火之塔",
      'sc': "火之塔",
      'en': "Tower of Fire"
    },
    'ice': {
      'ja': "氷の塔",
      'tc': "冰之塔",
      'sc': "冰之塔",
      'en': "Tower of Ice"
    },
    'bolt': {
      'ja': "雷の塔",
      'tc': "雷之塔",
      'sc': "雷之塔",
      'en': "Tower of Bolt"
    },
    'air': {
      'ja': "風の塔",
      'tc': "風之塔",
      'sc': "风之塔",
      'en': "Tower of Air"
    },
    'slash': {
      'ja': "斬の塔",
      'tc': "斬之塔",
      'sc': "斩击之塔",
      'en': "Tower of Slash"
    },
    'stab': {
      'ja': "突の塔",
      'tc': "突之塔",
      'sc': "突刺之塔",
      'en': "Tower of Stab"
    },
    'strike': {
      'ja': "打の塔",
      'tc': "打之塔",
      'sc': "打击之塔",
      'en': "Tower of Strike"
    }
  }

  constructor(
    protected route: ActivatedRoute,
    protected loc: Location,
    protected readonly destroy$: DestroyService,
    protected viewportScroller: ViewportScroller,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a25service: A25Service,) {
    super(destroy$, route, seoService, breadcrumbService, viewportScroller, loc);
  }

  changeData() {
    this.slug = this.route.snapshot.params.subject ? this.route.snapshot.params.subject : 'elemental-tower';
    this.gameService(this.a25service, `quests/tower`);
    this.title = this.translations[this.slug] ? this.translations[this.slug][this.language] : undefined;
    this.genericSettings(this.title, `All Tower floors in ${this.gameTitle}`, this.title, true);
    if (!this.title) {
      throw new HttpErrorResponse({status: 404});
    }
    return this.a25service.getTower(this.slug, this.language);
  }

  getHint(hints: Hint[], base_enemy: string) {
    return hints.find(h => h.base_enemy === base_enemy).desc
  }
}
