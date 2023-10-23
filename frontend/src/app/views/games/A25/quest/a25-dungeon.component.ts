import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Dungeon } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { takeUntil } from 'rxjs/operators';
import { FragmentedComponent } from '../../_prototype/fragmented.component';

@Component({
  templateUrl: 'a25-dungeon.component.html',
  selector: 'a25-dungeon',
  providers: [DestroyService]
})
export class A25DungeonComponent extends FragmentedComponent {
  dungeons: Dungeon[];
  title: string;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected loc: Location,
    protected viewportScroller: ViewportScroller,
    protected seoService: SeoService,
    protected a25service: A25Service,) {
    super(destroy$, route, seoService, viewportScroller, loc);
    this.dungeons = this.route.snapshot.data.data
    if (!this.dungeons) {
      this.error = `404`;
    }
    else {
      this.gameService(this.a25service, 'quests/dungeons');
      this.title = (this.language == 'en') ? 'Dungeons' : "ダンジョン";
      this.genericSEO(this.title, `All dungeons in ${this.gameTitle}`);
    }
  }

  changeData(): void {
    this.a25service.getDungeons(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: quest => {
          this.error = ``;
          this.dungeons = quest;
          this.gameService(this.a25service, 'quests/dungeons');
          this.title = (this.language == 'en') ? 'Dungeons' : "ダンジョン";
          this.genericSEO(this.title, `All dungeons in ${this.gameTitle}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 