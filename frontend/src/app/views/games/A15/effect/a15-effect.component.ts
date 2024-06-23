import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { EffectComponent } from '@app/views/_components/effect/effect.component';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a15-effect.component.html',
  selector: 'a15-effect',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, EffectComponent]
})
export class A15EffectComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a15service: A15Service,
    protected breadcrumbService: BreadcrumbService,
    protected seoService: SeoService) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  changeData() {
    this.gameService(this.a15service, 'effects');
    return this.a15service.getEffect(this.slug, this.language)
  }
  afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      'Effects',
      false,
      this.inputSlug ? false : true);
  }
} 