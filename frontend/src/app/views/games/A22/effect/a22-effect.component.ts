import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a22-effect.component.html',
  selector: 'a22-effect',
  providers: [DestroyService]
})
export class A22EffectComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a22service: A22Service) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a22service, 'effects');
    return this.a22service.getEffect(this.slug, this.language);
  }
  afterAssignment(): void {
    this.genericSEO(this.data.name, this.data.desc ? this.data.desc : `EV Effect in ${this.gameTitle}.`);
  }
} 