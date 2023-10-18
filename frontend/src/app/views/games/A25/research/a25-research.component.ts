import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { Research } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-research.component.html',
  selector: 'a25-research',
})
export class A25ResearchComponent extends SingleComponent implements OnInit {
  research: Research[];

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    protected a25service: A25Service,) {
    super(route, seoService);
    this.gameService(this.a25service, 'research');
  }

  kind = {
    "en": ['Combat Research', 'Alchemy Research'],
    "ja": ['戦闘研究', '錬金研究'],
  }

  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a25service.getResearch(this.language)
      .subscribe({
        next: research => {
          this.research = research;
          this.genericSEO('Research', `All research in ${this.gameTitle}`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

} 