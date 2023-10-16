import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { Dungeon } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-quest.component.html',
  selector: 'a25-quest',
})
export class A25QuestComponent extends SingleComponent implements OnInit {
  dungeons: Dungeon[];

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    protected a25service: A25Service,) {
    super(route, seoService);
    this.gameService(this.a25service, 'dungeons');
  }

  kind = {
    "en": ['Combat Quest', 'Alchemy Quest'],
    "ja": ['戦闘研究', '錬金研究'],
  }

  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a25service.getDungeons(this.language)
      .subscribe({
        next: dungeons => {
          this.dungeons = dungeons;
          this.genericSEO('Quest', `All quest in ${this.a25service.gameTitle}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

} 