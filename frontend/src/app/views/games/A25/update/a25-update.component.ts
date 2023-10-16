import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { Update } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-update.component.html',
  selector: 'a25-update',
})
export class A25UpdateComponent extends SingleComponent implements OnInit {
  update: Update;

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    protected a25service: A25Service,) {
    super(route, seoService);
    this.gameService(this.a25service, 'update');
  }

  kind = {
    "en": ['Combat Update', 'Alchemy Update'],
    "ja": ['戦闘研究', '錬金研究'],
  }

  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a25service.getUpdate(this.language)
      .subscribe({
        next: update => {
          this.update = update;
          this.genericSEO('Home', `What's new in ${this.a25service.gameTitle}?`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

} 