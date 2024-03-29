import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'br1-item.component.html',
  selector: 'br1-item',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class BR1ItemComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private br1service: BR1Service) {
    super(destroy$, route, seoService);
  }
  changeData() {
    this.gameService(this.br1service, 'items');
    return this.br1service.getItem(this.slug, this.language)
  }

  afterAssignment(): void {
    this.genericSEO(this.data.name, this.data.description);
  }
} 