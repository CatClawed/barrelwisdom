import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a23-effect.component.html',
  selector: 'a23-effect',
  providers: [DestroyService]
})
export class A23EffectComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a23service: A23Service) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a23service, 'effects');
    return this.a23service.getEffect(this.slug, this.language)
  }

  afterAssignment(): void {
    this.genericSEO(this.data.name, this.data.desc);
  }
} 