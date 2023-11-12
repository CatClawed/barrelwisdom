import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'br1-demon.component.html',
  selector: 'br1-demon',
  providers: [DestroyService]
})
export class BR1DemonComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private br1service: BR1Service) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.br1service, 'demons');
    return this.br1service.getDemon(this.slug, this.language)
  }

  afterAssignment(): void {
    this.genericSEO(this.data.name, this.data.flavor);
  }
} 