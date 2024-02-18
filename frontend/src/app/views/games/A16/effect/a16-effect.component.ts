import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a16-effect.component.html',
  selector: 'a16-effect',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A16EffectComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a16service: A16Service,
    protected seoService: SeoService) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a16service, 'effects');
    return this.a16service.getEffect(this.slug, this.language);
  }

  afterAssignment(): void {
    this.genericSEO(this.data.name, this.data.desc);
  }
}