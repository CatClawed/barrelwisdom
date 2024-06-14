import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a12-effect.component.html',
  selector: 'a12-effect',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A12EffectComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private a12service: A12Service,
    protected breadcrumbService: BreadcrumbService,
    protected seoService: SeoService) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  changeData() {
    this.gameService(this.a12service, 'effects');
    return this.a12service.getEffect(this.slug, this.language)
  }
  afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      'Effects',
      false,
      this.inputSlug ? false : true
    );
  }
} 