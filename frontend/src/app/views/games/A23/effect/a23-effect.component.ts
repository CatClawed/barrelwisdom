import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { EffectComponent } from '@app/views/_components/effect/effect.component';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a23-effect.component.html',
  selector: 'a23-effect',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, EffectComponent]
})
export class A23EffectComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private a23service: A23Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  changeData() {
    this.gameService(this.a23service, 'effects');
    return this.a23service.getEffect(this.slug, this.language)
  }

  afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      'Effects',
      false,
      this.inputSlug ? false : true);
  }
}