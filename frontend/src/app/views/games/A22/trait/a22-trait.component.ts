import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { Tooltip } from '@app/views/_components/tooltip/tooltip.component';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a22-trait.component.html',
  selector: 'a22-trait',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, Tooltip]
})
export class A22TraitComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private a22service: A22Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }
  changeData() {
    this.gameService(this.a22service, 'traits');
    return this.a22service.getTrait(this.slug, this.language);
  }
  afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      'Traits',
      false,
      this.inputSlug ? false : true);
  }
} 