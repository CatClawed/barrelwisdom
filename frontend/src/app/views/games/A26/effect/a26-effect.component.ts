import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { EffectComponent } from '@app/views/_components/effect/effect.component';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a26-effect.component.html',
    selector: 'a26-effect',
    providers: [DestroyService],
    imports: [...CommonImports, EffectComponent]
})
export class A26EffectComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a26service: A26Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  changeData() {
    this.gameService(this.a26service, 'effects');
    return this.a26service.getEffect(this.slug, this.language);
  }
  afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc1,
      'Effects',
      false,
      this.inputSlug ? false : true);
  }
}