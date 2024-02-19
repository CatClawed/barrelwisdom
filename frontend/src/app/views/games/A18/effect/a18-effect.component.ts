import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a18-effect.component.html',
  selector: 'a18-effect',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A18EffectComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a18service: A18Service) {
    super(destroy$, route, seoService);
  }

  changeData() {
    this.gameService(this.a18service, 'effects');
    return this.a18service.getEffect(this.slug, this.language);
  }
  afterAssignment(): void {
    this.genericSEO(this.data.name, this.data.desc);
  }
} 